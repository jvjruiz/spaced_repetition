var GoogleStrategy = require('passport-google-oauth20').Strategy
var passport = require('passport')
var secrets = require('./secrets')
var clientId = secrets.clientId
var clientSecret = secrets.clientSecret
var BearerStrategy = require('passport-http-bearer').Strategy
var User = require('../models/user')



var GoogleStrategy = new GoogleStrategy({
    clientID: process.env.CLIENT_ID || secrets.clientId,
    clientSecret: process.env.CLIENT_SECRET || secrets.clientSecret,
    callbackURL: process.env.DEV_HOST_NAME || "http://" + secrets.devHostname + "/auth/google/callback",
    passReqToCallback: true
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({googleId: profile.id}, function(err,user) {
            return cb(err,user);
        })
    }
)
  
var BearerStrategy = new BearerStrategy(
    function(token, done) {
        User.findOne({token:token}, function (err,user) {
            if (err) return done(err)
            if(!user) return done(null,false)
            return done(null,user,{scope:'all'});
        })
    }
)

exports.GoogleStrategy = GoogleStrategy
exports.BearerStrategy = BearerStrategy

