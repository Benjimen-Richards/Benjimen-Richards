const express = require('express');
const googleroute = express()
const session = require("express-session")
const port = 1111
const passport = require("passport")
const path = require('path');
const googleStrategy = require("passport-google-oauth").OAuth2Strategy
const config = require('../config')
let userprofile=''

googleroute.use(passport.initialize())
googleroute.use(passport.session())

googleroute.get('/profile',(req,res)=>
res.send(userprofile))

googleroute.get('/profile/logout',(req,res)=>
{
    userprofile=''
    res.send(userprofile)
}
)

passport.serializeUser((user, cb) => cb(null, user))
googleroute.get('/error', (req, res) => {
    res.send("Error while login")
})

passport.use(new googleStrategy({
    clientID: config.id,
    clientSecret: config.secret,
    callbackURL: "http://localhost:1111/google/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        userprofile = profile
        return done(null, userprofile)
    }
));
//redirects to google
googleroute.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

//google callback
googleroute.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000' }),
    function (req, res) {
        res.redirect('http://localhost:3000/dashboard');
    });

module.exports=googleroute