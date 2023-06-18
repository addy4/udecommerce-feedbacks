const stripetransact = require('stripe');
const keys = require('../config/keys');

const stripe = stripetransact(keys.stripeSecretKey);

module.exports = (app) => {

    // Consuming stripe token
    app.post('/api/stripe_payment', (req, res) => {
        console.log(req.body);
    });

    //for test
    app.get('/billtest', (_, res) => {
        res.send({ Web: "FeedbacksUdecommerce-Dev-Prod as LimitlessShore via herokuGit" });
    });
}