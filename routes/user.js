const express = require('express');
const router = express.Router();
const path=require('path');

router.get('/dashboard', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../public/dashboard.html'));
});

router.get('/usage', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../public/usage.html'));
});

router.get('/temperature', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../public/temperature.html'));
});

router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../public/login.html'));
});

router.get('/register', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../public/register.html'));
});

router.post('/register', (req, res, next) => {
    const {name, email, password, password} = req.body;
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
        res.sendFile(path.join(__dirname,'../public/register.html'), {
            errors,
            name,
            email,
            password,
            password2
        });
    } else{
        res.send('pass');
    }
});

module.exports = router;