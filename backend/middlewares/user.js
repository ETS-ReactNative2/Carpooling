const logger = require("../logger");
const jwt = require("jsonwebtoken");

const User = require("../model/user");

const ResetToken = require("../model/resetToken");
const { isValidObjectId } = require("mongoose");

exports.isResetTokenValid = async (req, res, next) => {
  const { token, id } = req.query;
  if (!token || !id)
    return res.json({
      success: false,
      message: "Invalid request!",
    });

  if (!isValidObjectId(id))
    return res.json({
      success: false,
      message: "Invalid user",
    });

  const user = await User.findById(id);
  if (!user)
    return res.json({
      success: false,
      message: "user not found!",
    });

  const resetToken = await ResetToken.findOne({ owner: user._id });
  if (!resetToken)
    return res.json({
      success: false,
      message: "Reset token not found!",
    });

  const isValid = await resetToken.compareToken(token);
  if (!isValid)
    return res.json({
      success: false,
      message: "Reset token is not invalid!",
    });

  req.user = user;
  next();
};

exports.authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decodedToken.userId;

    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};
