const passport = require('passport')

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }));

    // If we remove this, the cookie isn't set
    // this makes browser not able to use the same user's session
    app.get('/auth/google/callback', passport.authenticate('google'),
        (_, res) => {
            res.redirect('/surveys');
        }
    );

    //for home page
    app.get('/', (_, res) => {
        res.send({ Web: "FeedbacksUdecommerce-Dev-Prod as LimitlessShore via herokuGit" });
    });

    //for logging out user
    app.get('/api/logoutuser', (req, res) => {
        req.logout();
        //res.send(req.user); (this blocks redirect)
        res.redirect('/');
    });

    app.get('/text', (_, res) => {
        res.send({ Text: "Text at /text route at client end" });
    });

    //for authentication test
    app.get('/api/loggedin_user', (req, res) => {
        console.log(req.user);
        res.send(req.user)
    });
}
