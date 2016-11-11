var User = require('../models/user')

module.exports = function(req,res,next){
    
    if(!req.headers.bearerToken) return res.sendStatus(401);
    
    User.findOne({bearerToken: req.headers.bearerToken}, function(err, user) {
        if(!user) return res.sendStatus(401);
        req.currentUser = user;
        next()
    }
)}