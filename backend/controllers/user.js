const logger = require("../logger");
const jwt = require("jsonwebtoken");
const { isValidObjectId } = require("mongoose");

const User = require("../model/user");
const { createRandomBytes, sendError } = require("../utils/helper");
const VerificationToken = require("../model/verificationtoken");
const ResetToken = require("../model/resetToken");
const {
  generateOTP,
  mailTransport,
  plainEmailTemplate,
  EmailTemplate,
  generatePasswordResetTemplate,
  plainTemplate,
} = require("../utils/mail");

exports.createUser = async (req, res) => {
  const { name, email, password, address, role } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.json({
      success: false,
      message: "This email is already exists!",
    });
  }
  //return sendError(res, 'This email is already exists!')

  const newUser = new User({
    name,
    email,
    password,
    address,
    role,
  });

  const OTP = generateOTP();
  const verificationToken = new VerificationToken({
    owner: newUser._id,
    token: OTP,
  });

  await verificationToken.save();
  await newUser.save();

  mailTransport().sendMail({
    from: process.env.FROM_EMAIL,
    to: newUser.email,
    subject: "Verify your email account",
    html: EmailTemplate(OTP),
  });

  res.json({
    success: true,
    user: {
      name: newUser.name,
      email: newUser.email,
      id: newUser._id,
      verified: newUser.verified,
    },
  });
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // if(!email || !password) return
    //sendError(res, 'email/password missing!')

    const user = await User.findOne({ email });
    if (!user)
      return res.json({
        success: false,
        message: "user not found, with the given email!",
      });

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "email / password does not match!",
      });
    }

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      sucess: true,
      user: { name: user.name, email: user.email, id: user._id, token: token },
    });
  } catch (error) {
    sendError(res, error.message, 500);
  }
};

exports.verifyEmail = async (req, res) => {
  const { userId, otp } = req.body;
  if (!userId || !otp.trim())
    return res.json({
      success: false,
      message: "Invalid request, missing parameters",
    });

  if (!isValidObjectId(userId))
    return res.json({
      success: false,
      message: "Invalid userId!",
    });

  const user = await User.findById(userId);

  if (!user)
    return res.json({
      success: false,
      message: "Sorry, user not found",
    });

  if (user.verified)
    return res.json({
      success: false,
      message: "This account is already verified",
    });

  const token = await VerificationToken.findOne({ owner: userId });

  if (!token)
    return res.json({
      success: false,
      message: "Sorry, user not found!",
    });

  const isMatch = await token.compareToken(otp);
  if (!isMatch)
    return res.json({
      success: false,
      message: "please provide a valid token!",
    });

  user.verified = true;
  await VerificationToken.findByIdAndDelete(token._id);
  await user.save();

  mailTransport().sendMail({
    from: "emailverification@email.com",
    to: user.email,
    subject: "Welcome email",
    html: plainEmailTemplate(
      "Emailed Verified successfully",
      "Thanks for connecting with us"
    ),
  });

  res.json({
    success: true,
    message: "your email is verified.",
    user: { name: user.name, email: user.email, id: user._id },
  });
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email)
    return res.json({
      success: false,
      message: "Please provide valid email",
    });

  const user = await User.findOne({ email });
  if (!user)
    return res.json({
      success: false,
      message: "User not found, invalid request!",
    });

  const token = await ResetToken.findOne({ owner: user._id });

  if (token)
    return res.json({
      success: false,
      message: "Only after one hour you can request for another token!",
    });

  const RandomBytes = await createRandomBytes();
  const resetToken = new ResetToken({ owner: user._id, token: RandomBytes });
  await resetToken.save();

  mailTransport().sendMail({
    from: "security@email.com",
    to: user.email,
    subject: "Password Reset",
    html: generatePasswordResetTemplate(
      `http://localhost:3000/reset-password?token=${RandomBytes}&id=${user._id}`
    ),
  });

  res.json({
    success: true,
    message: "Password reset link is sent to your email.",
  });
};

exports.resetPassword = async (req, res) => {
  const { password } = req.body;

  const user = await User.findById(req.user._id);
  if (!user)
    return res.json({
      success: false,
      message: "User not found!",
    });

  const isSamePassword = await user.comparePassword(password);
  if (isSamePassword)
    return res.json({
      success: false,
      message: "New password must be the different!",
    });

  if (password.trim().length < 8 || password.trim().length > 20)
    return res.json({
      success: false,
      message: "Password must be 8 to 20 characters long!",
    });

  user.password = password.trim();
  await user.save();

  await ResetToken.findOneAndDelete({ owner: user._id });

  mailTransport().sendMail({
    from: "security@email.com",
    to: user.email,
    subject: "Password Reset successfully",
    html: plainTemplate(),
  });

  res.json({
    success: true,
    message: "Password Reset Successfully.",
  });
};
