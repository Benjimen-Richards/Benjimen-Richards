const express = require('express');
const app = express()
const session = require("express-session")
const passport = require("passport")
const port = 5000
const path = require('path');
const googleStrategy = require("passport-google-oauth").OAuth2Strategy
const config = require('./config')


app.use(passport.initialize())
app.use(passport.session())
app.set("view engine", "ejs")

passport.serializeUser((user, cb) => cb(null, user))

app.get('/', (req, res) => {
    res.render("../src/views/login")
})

app.get("/profile", (req, res) => {
    res.send(userprofile)
})

app.get('/error', (req, res) => {
    res.send("Error while login")
})

passport.use(new googleStrategy({
    clientID: config.id,
    clientSecret: config.secret,
    callbackURL: "http://localhost:5000/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        userprofile = profile
        return done(null, userprofile)
    }
));
//redirects to google
app.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

//google callback
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/error' }),
    function (req, res) {
        res.redirect('/profile');
    });

app.listen(port, () => {
    console.log("server started on", port)
})