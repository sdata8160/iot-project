const express = require('express');
const app = express();
const path = require('path');

app.use('/css', express.static(path.join(__dirname, './public/css')));

app.use('/js', express.static(path.join(__dirname, './public/js')));

app.use('/images', express.static(path.join(__dirname, './public/images')));

app.use('/assets', express.static(path.join(__dirname, './public/assets')));

app.use('/', (req, res, next) => {
	console.log('Request url: ' + req.url);
	next();
});

const indexRoute = require('./routes/index');
const usageRoute = require('./routes/usage');
const weatherRoute = require('./routes/weather');

app.use('/', indexRoute);
app.use('/', usageRoute);
app.use('/', weatherRoute);

module.exports = app;