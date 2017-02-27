//PACKAGES
import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import passport from 'passport'

//MODELS might not need this section
import user from '../models/user'

//ROUTES
import userEndpoints from './userEndpoints';
import questionEndpoints from './questionEndpoints';
import authEndpoints from './authEndpoints'

// import passportStrategy from './passportStrategy'

//CONSTANTS
const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const app = express();
const jsonParser = bodyParser.json();

//EXPRESS CONFIGS
app.use(express.static(process.env.CLIENT_PATH),
        jsonParser
);
app.use(passport.initialize())
app.use(passport.session())

//CREATE MODEL
var models = {}
models.user = mongoose.model('User', require('../models/user'));

//CREATE MIDDLEWARE 
var middleware = {}

//PASSPORT CONFIG
require('./googleStrategy.js')(passport,models)
//REGISTER PARAMS
//if have a lot of params, can use this section to load a file up
//REGISTER ROUTES
require('./userEndpoints.js')(app,models,middleware)
require('./questionEndpoints.js')(app,models,middleware)
require('./authEndpoints.js')(app,models,middleware)
//RUN SERVER
var runServer = function(callback) {
    mongoose.connect(process.env.DATABASE_URI || global.databaseUri || 'mongodb://jayyahh:dataPw@ds029106.mlab.com:29106/spaced-repetition');
    var port = process.env.PORT || 8080;
    var server = app.listen(port, function() {
        console.log('Listening on localhost:' + port);
        if (callback)callback(server);
    });
};

if (require.main === module) {
    runServer();
}

console.log(`Server running in ${process.env.NODE_ENV} mode`);

exports.app = app;
exports.runServer = runServer;