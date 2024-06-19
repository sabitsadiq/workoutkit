const User = require("../models/userModel");

// login
const loginUser = async (req, res) => {
  res.json({ msg: "login User" });
};

// sigup
const signupUser = async (req, res) => {
  res.json({ msg: "signup User" });
};

module.exports = { loginUser, signupUser };
