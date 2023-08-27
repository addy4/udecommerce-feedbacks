const express = require('express');
const mongoose = require('mongoose');
const cookieSess = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User') /* just want it to be executed so that mongoose class is set correctly. */
require('./services/passport'); /* We just want passport.js to be executed. Hence, need not assign this to a variable */
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const queryRoutes = require('./routes/faqRoutes');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());
app.use(
    cookieSess({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieEncryptionKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);
queryRoutes(app);

const PORT = process.env.PORT || 5020
app.listen(PORT, console.log("Listenting @ PORT 5020"));

