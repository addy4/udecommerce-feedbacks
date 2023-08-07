// setup
const keys = require('../config/keys');
const mongoose = require('mongoose');

// connect to DB
mongoose.connect(keys.mongoURI);

// model
const { Schema } = mongoose

const queSchema = new Schema({
    question: String,
    answer: String
});

// class
const Question = mongoose.model('ques', queSchema);

// post
async function PostQuestion() {
    // Create Question
    let added_question = await new Question({ question: "Does it accept international credit cards?" }).save();
    console.log("question ADDED IN DB ", added_question);
}

// update
async function AnswerQuestion() {
    // Find question
    let answer_question = await Question.updateMany({question: "Do we get any free credits?" }, { answer: "Yes, $10 credits are free!" })

    if (!answer_question) {
        throw new NotFoundError();
    } else {
        console.log("Updated!");
    }
}

// crud
//PostQuestion();
AnswerQuestion();