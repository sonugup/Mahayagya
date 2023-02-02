const express = require("express");
const { userModel } = require("../models/user.model");

const userroute = express.Router();

// its for geting all usre from backend
userroute.get("/all", async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
});

// its for signin in data base or sending in database
userroute.post("/signin", async (req, res) => {
  console.log(req.body);
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

// its for login in database
userroute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user.password === password) {
      res.send({ res: { auth: true, msg: "user verified", id: user._id } });
    } else {
      res.send({ res: { auth: false, msg: "unauthenticated" } });
    }
  } catch (error) {
    res.send(error.message);
  }
});

// its for getting a user data by their id from database
userroute.post("/user", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const user = await userModel.find({ _id: id });
    res.send(user);
  } catch (error) {}
});

module.exports = { userroute };
