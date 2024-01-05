const stripeTransact = require('stripe');
const keys = require('../config/keys');
const verifyLogin = require('../middleware/requireLogin');

const stripe = stripeTransact(keys.stripeSecretKey);

module.exports = (app) => {

    // Consuming stripe token
    app.post('/api/stripe_payment', verifyLogin, async (req, res) => {

        console.log(req.body);

        /*
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });
        */

        console.log(req.body.token);

        
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            //payment_method: req.body.token
            //payment_method_types: ['card'],
        });
        

        console.log(paymentIntent);
        console.log(req.user);

        req.user.credits += 5;

        const user = await req.user.save();

        //res.send({ clientSecret: paymentIntent.client_secret });
        res.send(user);

    });

    //for test
    app.get('/billtest', (_, res) => {
        res.send({ Web: "FeedbacksUdecommerce-Dev-Prod as LimitlessShore via herokuGit" });
    });
}