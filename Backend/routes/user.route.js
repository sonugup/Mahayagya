const express = require("express");

const userroute = express.Router();

userroute.get("/", async (req, res) => {
  const { first_name, last_name, email, password, mobile, role } = req.body;
  try {
    const users = await userModel.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      mobile: mobile,
      role: role,
    });
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = { userroute };
