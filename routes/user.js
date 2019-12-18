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

module.exports = router;