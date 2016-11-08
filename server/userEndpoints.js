var User = require('../models/user');

module.exports = function(app,models,middleware) {
    app.get('/api/users', function(req,res,next) {
        models.user
            .find({}, function(err, users) {
              res.status(200).json(users)  
            })
    })
    
    app.get('/api/users/:userId', function(req,res,next) {
        models.user.findOne({
            username: req.params.userName
        }, function(err,user) {
            if(err) return next(err);
            console.log("hello " + user);
            res.status(200).json(user);
        })
    })
    
    app.post('/api/users', function(req,res,next) {
        models.user
            .create(req.body,function(err, user) {
                if(err) {
                    return res.status(500).send(err)
                }
                return res.status(200).send(user)
            })
    })
    
    app.put('/api/users/:userId', function(req,res,next) {
        if(req.body.username)req.user.username = req.body.username
        req.user.save(function(err) {
            if(err) return next(err)
            res.send(req.user)
        })
    })
    
    app.delete('/api/users/:userId',function(req,res,next) {
        req.user.remove(function(err) {
            if(err) return res.status(400).send("Bad Request")
            res.status(204).send("User Deleted")
        })
    })
    
    app.param('userId', function(req,res,next,id) {
        models.user
            .findOne({_id:id})
            .exec(function(err,user) {
                if(err) return res.status(400).send("Bad request")
                if(!user) return res.status(404).send("No user exists")
                req.user = user
                next()
            })
    })
}