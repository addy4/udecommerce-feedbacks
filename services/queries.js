// setup
const mongoose = require('mongoose');

// class
const Question = mongoose.model('ques');

// post
async function PostQuestion(query) {
    // Create Question
    //let added_question = await new Question({ question: "Does it accept international credit cards?" }).save();
    let added_question = await new Question(query).save();
    console.log("question ADDED IN DB ", added_question);
    return added_question;
}

// update
async function AnswerQuestion(query, resolution) {
    // Find question & Answer
    //let answer_question = await Question.updateMany({question: "Does it accept international credit cards?" }, { answer: "Yes, we do!" })
    let answer_question = await Question.updateMany(query, resolution);

    if (!answer_question) {
        throw new NotFoundError();
    } else {
        console.log("Updated!");
    }
    return answer_question;
}

// CRUD
exports.postQuestion = PostQuestion;
exports.answerQuestion = AnswerQuestion;