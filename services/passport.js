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

passport.deserializeUser((idx, done) => {
    console.log("In deserializeUser method ", idx);
    User.findById(idx).then(user => done(null, user));
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {

    console.log('accessToken: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);

    const existing_user = await User.findOne({ googleID: profile.id });

    if (existing_user) {
        console.log("user ALREADY exists for the given profile-ID ", profile.id, existing_user);
        return done(null, existing_user);
    }

    const added_user = await new User({ googleID: profile.id }).save();
    console.log("user ADDED IN DB for the given profile-ID ", added_user);
    done(null, added_user);
}));
