var fetch = require('isomorphic-fetch');

export const USER_DATA_TO_STATE = 'USER_DATA_TO_STATE';
export const userDataToState = function (userId, accessToken) {
  return {
    type:USER_DATA_TO_STATE,
    userId: userId,
    accessToken: accessToken
  }
}

//checks to see if answer is correct or not
//change to USER_ANSWER TO CHECK ANSWER
export const CHECK_ANSWER = 'CHECK_ANSWER';
export const checkAnswer = function (answer) {
	return {
		type: CHECK_ANSWER,
		payload: answer
	}
}

//updates queue on back-end by telling if current question was answered correctly or not
//change to UPDATE QUEUE from submistanswer
export const UPDATE_QUEUE = 'UPDATE_QUEUE';
export const updateQueue = function (userId, isCorrect) {
  return (dispatch) => {
    return fetch('/api/questions/' + userId,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isCorrect: isCorrect
      })
    })
  };
};

//ACTION TO GET CURRENT QUESTION ***** ASYNC
export const FETCH_NEXT_QUETION = 'FETCH_NEXT_QUETION';
export const fetchNextQuestion = function (userId) {
  return dispatch => {
    return fetch('api/questions/nextquestion/' + userId)
    .then(function(response, error) {
     return response.json();
    }).then(function(response) {
      return dispatch(fetchNextQuestionSuccess(response))
    });
  }
};

//ACTION IF THE QUESTION RECIEVED SUCCESSFULLY
//change to FETCH_QUESTION_SUCCESS
export const FETCH_NEXT_QUESTION_SUCCESS = 'FETCH_NEXT_QUESTION_SUCCESS';
export const fetchNextQuestionSuccess = (payload) => {
  return {
    type: FETCH_NEXT_QUESTION_SUCCESS,
    payload: payload
  };
};

//future functionality
export const FETCH_USER_SCORE = 'FETCH_USER_SCORE';
export const fetchUserScore = function(userId) {
  return dispatch => {
    return fetch('/api/user/' + userId + '/userScore')
    .then(function(response,error) {
      return response.json();
    }).then(function(response) {
      return dispatch(fetchUserScoreSuccess(response))
    })
  }
}
export const FETCH_USER_SCORE_SUCCESS = 'FETCH_USER_SCORE_SUCCESS'
export const fetchUserScoreSuccess = (userScore) => {
  return {
    type: 'FETCH_USER_SCORE_SUCCESS',
    payload: userScore
  }
}