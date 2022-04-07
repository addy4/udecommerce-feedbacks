const passport = require('passport')

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }));
    app.get('/auth/google/callback', passport.authenticate('google'));

    //for home page
    app.get('/', (_, res) => {
        res.send({ Web: "feedbag-dev-prod as limitlessShore via herokuGit" });
    });

    //for logging out user
    app.get('/api/logoutuser', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    //for authentication test
    app.get('/api/loggedin_user', (req, res) => {
        console.log(req.user);
        res.send(req.user)
    });
}
