const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const db = require('./config/db');
const bcrypt = require('bcryptjs');

//load user model
const user = require('../models/user');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField: 'username'}, (username, password, done) =>
           
           //match user
           user.findOne({username: username })
           .then(user => {
               if(!user) {
                   return done(null, false, {message: 'the user does not exits!!!'});
               }

               //match user
               bcrypt.compare(password, user.password, (err, isMatch) => {
                   if(err) throw err;

                   if(isMatch){
                       return done(null, user);
                   } else {
                       return done(null, false, {message: 'incorrect password'});
                   }
               });
           })
           .catch(err => {console.log(err)})
        })
    );
    
    //serialize the user
    passport.serializeUser((User, done) => {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
        user.findById(id, (err, User)) => {
            done(err, User);
		});
    });
}