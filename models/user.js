import Mongoose from 'mongoose';
import {seedData} from '../server/factory_functions/seed-data'

const UserSchema = new Mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    googleToken: {
        type: String,
        required: true,
        unique: true
    },
    token: {
        type:String,
        required: true
    },
    score: {
        type: Number,
        required: false
    },
    questionQueue: [{
        question: String,
        answer: String,
        weight: Number
    }]
});

UserSchema.statics.findOrCreate = function(googleId, accessToken, callback) {
    this.findOne({googleId}, function(err,user) {
        if(err) return callback(err);
        if(!user) {
            this.create({googleId: googleId, token: accessToken, queue:seedData()},
                function(err, user) {
                    if(err) return callback(err);
                        return callback(null,user)
                })
            }
        return callback(null,user);
    })
}



module.exports = UserSchema;

// UserSchema.methods.submitAnswer = function(answer,questionId) {
//     const queue = this.queue;
//     const index = queue.findIndex(queueItem => queueItem.questionId === questionId);
//     Question.find({_id: questionId}, (err,question))
// }