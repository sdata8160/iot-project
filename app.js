const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

//Routes
const indexRoute = require('./routes/index');
const userRoute = require('./routes/user');

app.use('/', indexRoute);
app.use('/user', userRoute);

//Static file paths
app.use('/css', express.static(path.join(__dirname, './public/css')));
app.use('/js', express.static(path.join(__dirname, './public/js')));
app.use('/images', express.static(path.join(__dirname, './public/images')));
app.use('/assets', express.static(path.join(__dirname, './public/assets')));
app.use('/user/assets', express.static(path.join(__dirname, './public/assets')));
app.use('/user/css', express.static(path.join(__dirname, './public/css')));
app.use('/user/js', express.static(path.join(__dirname, './public/js')));
app.use('/user/images', express.static(path.join(__dirname, './public/images')));

//Log the Request Url
app.use('/', (req, res, next) => {
	console.log('Request url: ' + req.url);
	next();
});

module.exports = app;