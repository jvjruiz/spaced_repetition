var initialState = {
    currentQuestion:null,
    currentUserId: null,
    currentFeedback: null,
    isLoggedIn: null,
    isCorrect: null,
    currentError: null
}

function reducer(state, action) {
    var newState = {}
    state = state || initialState;
    
    switch(action.type) {
        case 'FETCH_QUESTION_SUCCESS':
            newState = Object.assign({}, state, {
                currentQuestion : action.payload
            });
            return newState;
    
        case 'FETCH_QUESTION_ERROR':
            newState = Object.assign({},state, {
                currentError: action.payload
            });
            return newState;
        
        case 'CHECK_ANSWER':
            var isCorrect = false
            var feedback = 'you got it wrong'
            if(action.payload == state.currentQuestion.answer) {
                isCorrect = true
                feedback = 'good job'
            }
            newState = Object.assign({},state, {
                isCorrect: isCorrect,
                currentFeedback: feedback
            })
            return newState
    }
}

module.exports = reducer