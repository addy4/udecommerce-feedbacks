const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys')

//getting users collection as User model class
const User = mongoose.model('users')

//serialization and deserialization of user
passport.serializeUser((user, done) => {
    console.log("in passport.serializeUser method: ", user);
    console.log("user.id: ", user.id);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log("in deserializeUser method ", id);
    User.findById(id).then(user => done(null, user));
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessTk, refreshToken, profile, done) => {
    console.log('accessToken: ', accessTk);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);

    User.findOne({ googleID: profile.id })
        .then((userExistance) => {
            if (userExistance) {
                // user with this googleID ~ profile.id already exists
                console.log("userExistance ", userExistance);
                done(null, userExistance);
            } else {
                //creating user with googleID ~ profile.id. .save() is imp!
                console.log("No userExistance ", userExistance);
                new User({ googleID: profile.id }).save().then(user => done(null, user));
                // new User({ googleID: profile.id }).save();
            }
        });
}));
