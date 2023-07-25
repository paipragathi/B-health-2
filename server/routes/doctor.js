const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const {Doctor} = require('../db/index');
const jwt = require('jsonwebtoken');
const secret = process.env.Secret;
const {authenticateJwt} = require('../middleware/auth');

const router = express.Router();

//using this route to pass on all the pages which require authentication
router.get('/me',authenticateJwt,(req,res)=>{
    res.json({
        username : req.user.username
    });
});

router.post('/signup',(req,res)=>{
    const {username , password} = req.body;
    Doctor.findOne({username}).then((admin)=>{
        if(admin){
            res.status(403).json({
                message:"doctor already exists",
                status_code:403
            })
        }else{
            const obj = {
                username, password
            };
            const newAdmin = new Doctor(obj);
            newAdmin.save();
            const token = jwt.sign({username,role:'doctor'},secret);
            res.json({
                message:"doctor created successully",
                token
            });
        }
    });
});

router.post('/login',async(req,res)=>{
    const {username, password} = req.body;
    const admin = await Doctor.findOne({username,password});
    if(admin){
        const token = jwt.sign({username,role:'doctor'},secret);
        res.json({
            message:"Logged in successfully",
            token
        });
    }else{
        res.status(403).json({
            message:"Invalid username or password"
        });
    }
});



