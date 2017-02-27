//GOOGLE PASSPORT STRATEGY
var seedData = require('./factory_functions/seed-data.js');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var secrets = require('./secrets');
var clientID = secrets.clientID;
var clientSecret = secrets.clientSecret;
var cbURL = secrets.devHostname;

console.log('hello')
module.exports = function(passport, models) {
    passport.use(new GoogleStrategy({
        clientID: clientID,
        clientSecret: clientSecret,
        callbackURL: cbURL + "/auth/google/callback",
        passReqToCallback: true
        },
        function(request, accessToken, refreshToken, profile, callback) {
            request.accessToken = accessToken
            models.user
                .findOne({googleToken: profile.id}, function(err,user) {
                    if(err) {
                        return err
                    }
                    if(user) {
                        user.token = accessToken;
                        user.save(function(err, doc) {
                            return callback(err,doc)
                        });
                    }
                    else {
                        var newUser = new models.user({
                            name: profile.displayName,
                            googleToken: profile.id,
                            token: accessToken,
                            questionQueue: seedData()
                        })
                        newUser.save(function(err,res) {
                            if(err) return res.status(400).send('error')
                            return callback(null, newUser)
                        })
                    }
                })
        }
    ))};