const express = require('express');
const app = express();
const path = require('path');

app.use('/public/assets', express.static(path.join(__dirname, './public')));

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