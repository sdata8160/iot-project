const express = require('express');
const app = express();
const path = require('path');
const flash = require('connect-flash');
const expressSession = require('express-session');
const passport = require('passport');
const expressLayouts = require('express-ejs-layouts');

//EJS 
app.use(expressLayouts);
app.set('view engine','ejs');

//passport config
require('./config/passport')(passport);

//db
const db = require('./config/db');

//bodyparser
app.use(express.urlencoded({extended: false}));

//express session
app.use(expressSession({
	secret: '&^%^%$%#^*&*&T6&^&Tt7T&T&T&$#%$$^%&^',
	resave: false,
	saveUninitialized:false
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

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