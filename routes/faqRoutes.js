const { postQuestion } = require('../services/queries');
const { answerQuestion } = require('../services/queries');

module.exports = (app) => {

    app.post('/api/post_query', async (req, res) => {
        const postQuery = await postQuestion(req.body);
        console.log(postQuery);
        res.status(202).json(postQuery)
    });

    app.post('/api/answer_query', async (req, res) => {
        const answerQuery = await answerQuestion(req.body.query, req.body.resolution);
        res.status(202).json(answerQuery);
    })

}