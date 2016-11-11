module.exports = function(app,models,middleware) {
    
    app.get('/api/questions/:userId',function(req,res,next){
        var userId = req.params.userId;
        models.user 
            .findById(userId, function(err, user) {
                console.log("You got an errrrororoororroor");
                if(err) return res.status(500).json(err);
                return res.json(user.questionQueue);
            });
    });
    
    app.get('/api/questions/nextquestion/:userId',function(req,res,next){
        var userId = req.params.userId
        models.user 
            .findById(userId, function(err, user) {
                if(err) return res.status(500).json(err);
                console.log(user.questionQueue)
                return res.json(user.questionQueue[0]);
            });
    });
    
    app.post('/api/questions/:userId/', function(req,res,next) {
        console.log(req.body)
        var userId = req.params.userId;
        var isCorrect = req.body.isCorrect === true;
        models.user
            .findById(userId,function(err, user) {
                if(err) return res.status(500).json(err);
                if(user == null) return res.status(404).send('User does not exist');
                var question = user.questionQueue.shift();
                if(isCorrect) {
                    question.weight *= 2;
                }
                else {
                    question.weight = 2;
                }
                if(question.weight >= user.questionQueue.length) {
                    user.questionQueue.push(question);
                }
                else{
                    user.questionQueue.splice(question.weight,0,question);
                }
                user.save(function(err) {
                    if(err) return res.status(500).json(err);
                    return res.sendStatus(204)
                });
            });
    });
};

