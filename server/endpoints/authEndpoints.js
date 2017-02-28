var GoogleStrategy = require('passport-google-oauth20').Strategy
var passport = require('passport')
var secrets = require('../secrets')
var clientId = secrets.clientId
var clientSecret = secrets.clientSecret
var cbURL = secrets.devHostname
var User = require('../../models/user')

module.exports = function(app,models,middleware) {
    app.get('/auth/google', passport.authenticate('google', {scope:['profile'],session: false})), 
        function() {
        };
    
    app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/login', session: false}), 
        function(req,res) {
            res.redirect('/#/startGame/?access_token=' + req.user.token +"&userId="+req.user._id)
        }
    )
};