var fetch = require('isomorphic-fetch');

var FETCH_QUESTION = 'FETCH_QUESTION';
function fetchQuestion(currentUserId) {
    return function(dispatch) {
        return fetch('/api/questions/nextquestion' + currentUserId).then(function(res) {
            return res.json();
        }).then(function(response) {
            return dispatch(fetchQuestionSuccess(response));
        }).catch(function(err) {
            return dispatch(fetchQuestionError(err))
        })
    };
}

var FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
function fetchQuestionSuccess(question) {
    return {
        type: FETCH_QUESTION_SUCCESS,
        payload: question
    };
}

var FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
function fetchQuestionError(error) {
    return {
        type: FETCH_QUESTION_ERROR,
        payload: error
    };
}

var UPDATE_QUEUE = 'UPDATE_QUEUE';
function updateQueue(userId, isCorrect) {
    return function(dispatch) {
        var url = '/api/questions/' + userId
            return fetch(url,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    isCorrect: isCorrect
                })
            })
    }
}


var CHECK_ANSWER = 'CHECK_ANSWER';
function checkAnswer (answer) {
  return {
      type: CHECK_ANSWER,
      payload: answer
  }
}

exports.CHECK_ANSWER = CHECK_ANSWER;
exports.checkAnswer = checkAnswer

exports.FETCH_QUESTION = FETCH_QUESTION;
exports.fetchQuestion = fetchQuestion;

exports.FETCH_QUESTION_SUCCESS = FETCH_QUESTION_SUCCESS;
exports.fetchQuestionSuccess = fetchQuestionSuccess;

exports.FETCH_QUESTION_ERROR = FETCH_QUESTION_ERROR;
exports.fetchQuestionError = fetchQuestionError;

