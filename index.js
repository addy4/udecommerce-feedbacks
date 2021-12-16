const express = require('express');
//const passport = require('passport');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const keys = require('./config/keys')

const app = express();

app.get('/', (req, res) => {
    res.send({ Web: "feedbag-dev as limitlessShore via herokuGit" });
});

/*
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
    console.log(accessToken);
}));

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

app.get(
    '/auth/google/callback',
    (req, res) => {
        res.send({ Devops: "Dev with ITops/Dataops" });
    });
*/

const PORT = process.env.PORT || 5020
app.listen(PORT, console.log("Listenting @5020.."));

