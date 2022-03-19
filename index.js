const express = require('express');
const mongoose = require('mongoose');
const cookieSess = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User') /* just want passport.js to be executed. Hence, need not assign this */
require('./services/passport'); /* We just want passport.js to be executed. Hence, need not assign this to a variable */
const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(
    cookieSess({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieEncryptionKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5020
app.listen(PORT, console.log("Listenting @ PORT 5020"));

