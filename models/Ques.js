const mongoose = require('mongoose');
const { Schema } = mongoose

const queSchema = new Schema({
    question: String,
    answer: String
});

mongoose.model('ques', queSchema);