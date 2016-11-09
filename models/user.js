import Mongoose from 'mongoose';

const UserSchema = new Mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    token: {
        type:String,
        required: false
        //to be changed to true once authentication is up and running
    },
    questionQueue: [{
        question: String,
        answer: String,
        weight: Number
    }]
});

module.exports = UserSchema;

// UserSchema.methods.submitAnswer = function(answer,questionId) {
//     const queue = this.queue;
//     const index = queue.findIndex(queueItem => queueItem.questionId === questionId);
//     Question.find({_id: questionId}, (err,question))
// }