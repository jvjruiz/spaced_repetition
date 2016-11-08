import Mongoose from 'mongoose';

const QuestionsSchema = new Mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = QuestionsSchema