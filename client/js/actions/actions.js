require('isomorphic-fetch');


//ACTION TO INCREASE SCORE
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
} ;

//FEEDBACK
export const FEEDBACK = 'FEEDBACK';
export const Feedback = () => {
  return {
    type: FEEDBACK
  };
};

//ACTION TO SHOW SUBMIT BUTTON
export const SUBMIT_BOX = 'SUBMIT_ BOX';
export const SubmitBox = () => {
  return {
    type: SUBMIT_BOX,
    payload: false
  };
};

//ACTION TO  DETERMINE WHETHER QUESTION IS CORRECT
export const QUESTION_CORRECT = 'QUESTION_CORRECT';
export const QuestionCorrect = () => {
  return{
    type: QUESTION_CORRECT
  };
};

//ACTION TO SHOW BUTTON TO LOG IN
export const LOG_IN_BUTTON = 'LOG_IN_BUTTON';
export const LogInButton = () => {
  return {
    type: LOG_IN_BUTTON
  };
};

//ACTION TO SHOW WHAT USER IS LOGGED IN
export const CURRENT_USER = 'CURRENT_USER';
export const CurrentUser = () => {
  return {
    type: CURRENT_USER,
    payload: false
  };
};

//ACTION IF THE SUBMITTED ANSWER IS SUCCESSFUL
export const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
export const submitAnswerSuccess = (payload) => {
  return {
    type: SUBMIT_ANSWER_SUCCESS,
    payload: payload
  };
};

//ACTION IF THE SUBMITTED ANSWER FAILED
export const SUBMIT_ANSWER_FAILURE = 'SUBMIT_ANSWER_FAILURE';
export const submitAnswerFailure = (error) => {
  return {
    type: SUBMIT_ANSWER_FAILURE,
    payload: error
  };
};

//ACTION IF THE QUESTION RECIEVED SUCCESSFULLY
export const QUESTION_SUCCESS = 'QUESTION_SUCCESS';
export const questionSuccess = (payload) => {
  return {
    type: QUESTION_SUCCESS,
    payload: payload
  };
};
//ACTION IF THE QUESTION FAILED
export const QUESTION_FAILURE = 'QUESTION_FAILURE';
export const questionFailure = (error) => {
  return {
    type: QUESTION_FAILURE,
    payload: error
  };
};

//ACTION IF USER LOG IN IS SUCCESSFUL
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const loginInSuccess = (payload) => {
  return {
    type: LOG_IN_SUCCESS,
    payload: payload
  };
};
//ACTION IF USER LOG IN FAILED MISERABLY
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const logInFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    payload: error
  };
};


//ACTION TO START THE GAME 
export const START_GAME = 'START_GAME';
export const StartGame = (userId) => {
  return {
   type: START_GAME
  };
} ;

//ACTION TO GET CURRENT QUESTION ***** ASYNC
export const CURRENT_QUESTION = 'CURRENT_QUESTION';
export const CurrentQuestion = function (userId) {
  return fetch('api/questions/' + userId).then(function callback(res){
    dispatch(questionSuccess(res.json()))
  });
};


//ACTION TO LOG THE USER IN **** ASYNC
export const LOG_USER_IN = "LOG_USER_IN";
export const logUserIn = function (userId) {
  return fetch('users/' + userId, function callback(res){
    dispatch
  });
};
//ACTION TO submit answer *****ASYNC 
export const SUMBIT_ANSWER = 'SUBMIT_ANSWER';
export const submitAnswer = function (userId) {
  return dispatch => {
    return fetch('users/' + userId).then(function callback(res){
      dispatch(submitAnswerSuccess(res.json()));
    });
  };
};

//AJAX CALL TO GET SUBREDDIT
// export const fetchVideo = () => {
//   return dispatch => {
//     dispatch(requestVideo())
//     return fetch('https://www.youtube.com/watch?v=JvdwowH_4Y8')
//       .then(response => response.json())
//       .then(json => dispatch(receiveVideo(json.video)))
//   }
// }

//if user is not authenicated, back to log in page
// if user is autehnicated, do stuff
