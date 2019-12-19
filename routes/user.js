const express = require('express');
const router = express.Router();
const path=require('path');
const bcrypt = require('bcryptjs');

// user model
const User = require('../models/User');

router.get('/dashboard', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../public/dashboard.html'));
});

router.get('/usage', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../public/usage.html'));
});

router.get('/temperature', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../public/temperature.html'));
});

router.get('/login', (req, res) => res.render('login'));

router.get('/register', (req, res) => render('register'));

router.post('/register', (req, res, next) => {
    const {name, email, password, password2} = req.body;
    let errors = [];

    //check required fields
    if(!name || !email || !password || !password2) {
        errors.push({msg: 'Please fill all the fields'});
    }

    //check passwords match
    if(password!=password2) {
        errors.push({msg: 'Passwords do not match'});
    }

    //check pass length
    if(password.length < 6) {
        errors.push({msg: 'Passwords should be at least 6 chars'});
    }

    if(errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else{
        //validation passed
        User.findOne({email: email})
        .then(user => {
            if(user){
                //User Exists
                errors.push({msg: 'Email is already registered'});
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
               });     
            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                });

                console.log('newUser')

            }
        });
    }
});

module.exports = router;