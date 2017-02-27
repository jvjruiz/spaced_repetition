var fetch = require('isomorphic-fetch');

//checks to see if answer is correct or not
//change to CHECK ANSWER
export const USER_ANSWER = 'USER_ANSWER';
export const userAnswer = function (answer) {
	return {
		type: USER_ANSWER,
		payload: answer
	}
}

//updates queue on back-end by telling if current question was answered correctly or not
//change to UPDATE QUEUE
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const submitAnswer = function (userId, isCorrect) {
  return dispatch => {
  
    return fetch('/api/questions/' + userId,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:{
        isCorrect: isCorrect
      }
    }).then(function (res) {
      dispatch(submitAnswerSuccess(userId));
    });
  };
};

//after updating queue, this is called to fetch the next question
//change to FETCH NEXT QUESTION
export const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
export const submitAnswerSuccess = (userId) => {
    return dispatch => {
    return fetch('/api/questions/nextquestion/' + userId, function callback(res){
      dispatch(questionSuccess(userId));
    });
  };
};

//if updating queue has error, dispatch this
export const SUBMIT_ANSWER_FAILURE = 'SUBMIT_ANSWER_FAILURE';
export const submitAnswerFailure = (error) => {
  return {
    type: SUBMIT_ANSWER_FAILURE,
    payload: error
  };
};

//ACTION TO GET CURRENT QUESTION ***** ASYNC
//to be eliminated, has same functionality as future FETCH NEXT QUESTION
export const CURRENT_QUESTION = 'CURRENT_QUESTION';
export const CurrentQuestion = function (userId) {
  return dispatch => {
    return fetch('api/questions/nextquestion/' + userId)
    .then(function(response, error) {
     return response.json();
    }).then(function(response) {
      return dispatch(questionSuccess(response))
    });
  }
};

//ACTION IF THE QUESTION RECIEVED SUCCESSFULLY
//change to FETCH_QUESTION_SUCCESS
export const QUESTION_SUCCESS = 'QUESTION_SUCCESS';
export const questionSuccess = (payload) => {
  return {
    type: QUESTION_SUCCESS,
    payload: payload
  };
};

//ACTION IF FETCHING THE QUESTIONS FAILS
//change to FETCH_QUESTION_FAILURE
export const QUESTION_FAILURE = 'QUESTION_FAILURE';
export const questionFailure = (error) => {
  return {
    type: QUESTION_FAILURE,
    payload: error
  };
};

export const USER_DATA_TO_STATE = 'USER_DATA_TO_STATE';
export const userDataToState = function (userId, accessToken) {
  return {
    type:USER_DATA_TO_STATE,
    userId: userId,
    accessToken: accessToken
  }
}

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