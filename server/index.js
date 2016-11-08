//PACKAGES
import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
//MODELS might not need this sectionm
import user from '../models/user'
import question from '../models/question'
//ROUTES
import userEndpoints from './userEndpoints';
import questionEndpoints from './questionEndpoints';
//CONSTANTS
const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const app = express();
const jsonParser = bodyParser.json();
//EXPRESS CONFIGS
app.use(express.static(process.env.CLIENT_PATH));
app.use(jsonParser);
//CREATE MODEL
var models = {}
models.user = mongoose.model('User', require('../models/user'));
models.question = mongoose.model('Question', require('../models/question'));
console.log(`Server running in ${process.env.NODE_ENV} mode`);
//CREATE MIDDLEWARE 
var middleware = {}
//REGISTER ROUTES
require('./userEndpoints.js')(app,models,middleware)
require('./questionEndpoints.js')(app,models,middleware)

var runServer = function(callback) {
    mongoose.connect(process.env.DATABASE_URI || global.databaseUri || 'mongodb://localhost/spaced_repetition')
    var port = process.env.PORT || 8080;
    var server = app.listen(port, function() {
        console.log('Listening on localhost:' + port);
        if (callback)callback(server);
    })
};

if (require.main === module) {
    runServer();
}

exports.app = app;
exports.runServer = runServer;