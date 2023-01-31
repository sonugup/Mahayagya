const express= require('express');

const userroute=express.Router();

userroute.get('/', (req, res) => {
    res.send("post")
})

module.exports={userroute};


