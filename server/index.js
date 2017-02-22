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
//GOOGLE PASSPORT STRATEGY
var seedData = require('./factory_functions/seed-data.js')
var GoogleStrategy = require('passport-google-oauth20').Strategy
var secrets = require('./secrets')
var clientID = secrets.clientID
var clientSecret = secrets.clientSecret
var cbURL = secrets.devHostname
passport.use(new GoogleStrategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: cbURL + "/auth/google/callback",
    passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, callback) {
        console.log(profile)
        request.accessToken = accessToken
        models.user
            .findOne({googleToken: profile.id}, function(err,user) {
                if(err) {
                    return err
                }
                if(user) {
                    user.token = accessToken;
                    console.log(user)
                    user.save(function(err, doc) {
                        return callback(err,doc)
                    });
                }
                else {
                    console.log(profile.displayName)
                    var newUser = new models.user({
                        name: profile.displayName,
                        googleToken: profile.id,
                        token: accessToken,
                        questionQueue: seedData()
                    })
                    newUser.save(function(err,res) {
                        if(err) return res.status(400).send('error')
                        console.log(newUser)
                        return callback(null, newUser)
                    })
                }
            })
    }
));
//BEARER TOKEN STRATEGY
var BearerStrategy = require('passport-http-bearer').Strategy
passport.use(new BearerStrategy(
    function(token, done) {
        console.log(token)
        models.user
        .findOne({token:token}, function (err,user) {
            if (err) return done(err)
            if(!user) return done(null,false)
            return done(null,user,{scope:'all'});
        })
    }
))
//CREATE MODEL
var models = {}
models.user = mongoose.model('User', require('../models/user'));
console.log(`Server running in ${process.env.NODE_ENV} mode`);
//CREATE MIDDLEWARE 
var middleware = {}
//PASSPORT CONFIG
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

exports.app = app;
exports.runServer = runServer;