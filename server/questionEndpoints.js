var Question = require('../models/question') 

module.exports = function(app,models,middleware) {
    app.get('/api/questions', function(req,res,next) {
        models.question
            .find({},function(err,questions) {
                if(err) return next(err)
                res.status(200).json(questions)
            })
    })
    
    app.get('/api/questions/user/:username',function(req,res,next){
        models.user.findOne({
            username: req.params.username
        }, function(err,user) {
            console.log(err)
            if(err) return next(err);
            models.question.find({
                user: user._id
            }, function(err,questions) {
                if(err) return next(err)
                return res.json(questions)
            });
        });
    })
    
    app.get('/api/questions/:questionId', function(req,res,next) {
        res.send(req.question)
    })
    
    app.post('/api/questions', function(req,res,next) {
        models.question
            .create(req.body,function(err,question) {
                if(err) return next(err)
                res.send(question)
            })
    })
    
    app.put('/api/questions/:questionId',function(req,res,next) {
        console.log('made it into put')
        if(req.body.weight)req.question.weight = req.body.weight
        if(req.body.question)req.question.question = req.body.question
        if(req.body.answer)req.question.answer = req.body.answer
        if(req.body.user)req.question.user = req.body.user
        req.question.save(function(err) {
            console.log(err)
            if(err) return next(err)
            res.send(req.question)
        })
    })
    
    app.param('questionId', function(req,res,next,id) {
        models.question
            .findOne({_id:id})
            .populate('user','username')
            .exec(function(err,question) {
                if(err) return next(err)
                if(!question) return res.status(404).send('No Question Exist')
                console.log('question you are working on is ' + question)
                req.question = question
                next()
            })
    })
}