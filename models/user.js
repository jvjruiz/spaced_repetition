import Mongoose from 'mongoose';

const UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    token: {
        type:String,
        required: false
        //to be changed to true once authentication is up and running
    }
});

module.exports = UserSchema;