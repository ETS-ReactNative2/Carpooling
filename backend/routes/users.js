const router = require("express").Router();

const {
  createUser,
  signin,
  verifyEmail,
  forgotPassword,
  resetPassword,
} = require("../controllers/user");
const logger = require("../logger");
const { isResetTokenValid } = require("../middlewares/user");
const { validateUser, validate } = require("../middlewares/validator");

const User = require("../model/user");

const customValidator = function (req, res, next) {
  logger.warn("running my custom validator");
  // res.status(401).json({message: 'not allowed'})
  next();
};
// /apis/v1/users --> /create
// http://localhost:8000/apis/v1/users/create
router.post("/create", validateUser, validate, createUser);
router.post("/signin", signin);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", isResetTokenValid, resetPassword);
router.get("/verify-token", isResetTokenValid, (req, res) => {
  res.json({ success: true });
});

module.exports = router;
