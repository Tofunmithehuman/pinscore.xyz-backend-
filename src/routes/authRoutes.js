const express = require("express");
const authController = require("../controllers/authController");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();

// routes
router.post("/signup", authController.signup);
router.post("/forgot-password", authController.sendForgotPasswordOtp);
router.post("/update-password", authController.updatePassword);
router.post("/validate-otp", authController.validateOtp);
router.post("/login", authController.login);
router.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
