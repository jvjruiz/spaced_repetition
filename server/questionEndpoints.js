module.exports = function(app,models,middleware) {
    
    app.get('/api/questions/:userId',function(req,res,next){
        var userId = req.params.userId
        models.user 
            .findById(userId, function(err, user) {
                if(err) return next(err)
                return res.json(user.questionQueue)
            })
    })
    
    app.get('/api/questions/nextquestion/:userId',function(req,res,next){
        var userId = req.params.userId
        models.user 
            .findById(userId, function(err, user) {
                if(err) return next(err)
                return res.json(user.questionQueue[0])
            })
    })
    
    app.post('/api/questions/:userId/', function(req,res,next) {
        var userId = req.params.userId
        var isCorrect = req.body.isCorrect === true;
        models.user
            .findById(userId,function(err, user) {
                if(err) return next(err)
                if(user == null) return res.status(404).send('User does not exist')
                var question = user.questionQueue.shift();
                if(isCorrect) {
                    question.weight *= 2
                }
                else {
                    question.weight = 1
                }
                if(question.weight >= user.questionQueue.length) {
                    user.questionQueue.push(question)
                }
                else{
                    user.questionQueue.splice(question.weight,0,question);
                }
                user.save(function(err) {
                    if(err) return next(err)
                    return res.sendStatus(204)
                })
            })
    })
}