const express = require('express');
const cors=require('cors');
const { connection } = require('./config/db');
const {userroute}=require("./routes/user.route")
require('dotenv').config()


const app=express()

app.use(express.json());

app.use(cors());

app.use("/router", userroute);
app.use('/', (req, res) => {
    res.send("home page")
})

app.listen(5040, () => {
    connection();
    console.log("anything")
})
