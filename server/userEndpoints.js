var seedData = require('./factory_functions/seed-data.js')

module.exports = function(app,models,middleware) {
    app.get('/api/users', function(req,res,next) {
        models.user
            .find({}, function(err, users) {
              res.status(200).json(users)  
            })
    })
    app.get('/api/users/:userId', function(req,res,next) {
        // console.log(req.params)
        // models.user.findOne({
        //     username: req.params.userName
        // }, function(err,user) {
        //     if(err) return res.status(500).json(err);
        //     console.log("hello " + user);
        //     res.status(200).json(user);
        // })
        res.send(req.user)
    })
    app.post('/api/users', function(req,res,next) {
        var email = req.body.email
        if(!req.body) return res.status(400).send('No Request Body') 
        
        models.user
            .create(function(err, user) {
                if(err) {
                    return res.status(500).send(err)
                }
                var newUser = new models.user({
                    email: email,
                    questionQueue: seedData()
                });
                newUser.save(function(err) {
                    if(err) return res.status(500).json(err)
                    return res.status(201).send(newUser)    
                })
            })
    })
    app.put('/api/users/:userId', function(req,res,next) {
        if(req.body.email)req.user.email = req.body.email
        req.user.save(function(err) {
            if(err) return res.status(500).json(err)
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
                if(err) return res.status(500).json(err)
                if(!user) return res.status(404).send("No user exists")
                req.user = user
                next()
            })
    })
}