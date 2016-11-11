require('isomorphic-fetch');

//ACTION TO LOG THE USER IN **** ASYNC
export const LOG_USER_IN = "LOG_USER_IN";
export const logUserIn = function (userId) {
  return dispatch => {
    return fetch('users/' + userId, function callback(res){
      dispatch(loginInSuccess(res.json())),
      dispatch(currentUser())
    })
  }
};


//******************************ACTION IF USER LOG IN IS SUCCESSFUL
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const loginInSuccess = (payload) => {
  return {
    type: LOG_IN_SUCCESS,
    payload: payload
  };
};

//**********************************ACTION TO SHOW WHAT USER IS LOGGED IN
export const CURRENT_USER = 'CURRENT_USER';
export const currentUser = function (userId) {
  return dispatch => {
    return fetch('/api/questions/nextquestion' + userId, function callback(res){
      dispatch(StartGame())
    })
  }
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
  console.log('startGame actions calleds');
  return {
   type: START_GAME
  };
} ;


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
    type: SUBMIT_BOX
  };
};

//ACTION IF THE SUBMITTED ANSWER IS SUCCESSFUL
export const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
export const submitAnswerSuccess = (userId) => {
    return dispatch => {
    return fetch('/api/questions/nextquestion/' + userId, function callback(res){
      dispatch(questionSuccess(res.json()));
      dispatch(Feedback());
    });
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

//ACTION TO submit answer *****ASYNC 
export const SUMBIT_ANSWER = 'SUBMIT_ANSWER';
export const submitAnswer = function (userId, iscorrect) {
  return dispatch => {
    return fetch('/api/questions/' + userId,{
      method: 'POST',
      body:{
        iscorrect: iscorrect
      }}).then(function (res) {
        console.log(res)
      dispatch(submitAnswerSuccess(res.json()));
    });
  };
};

export const USER_ANSWER = 'USER_ANSWER';
export const userAnswer = function (answer) {
	return {
		type: USER_ANSWER,
		answer: answer
	}
}


//ACTION TO  DETERMINE WHETHER QUESTION IS CORRECT
export const QUESTION_CORRECT = 'QUESTION_CORRECT';
export const QuestionCorrect = (text) => {
  return{
    type: QUESTION_CORRECT,
    text
  };
};


//ACTION IF THE QUESTION RECIEVED SUCCESSFULLY
export const QUESTION_SUCCESS = 'QUESTION_SUCCESS';
export const questionSuccess = (payload) => {
  console.log(payload)
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

//ACTION TO GET CURRENT QUESTION ***** ASYNC
export const CURRENT_QUESTION = 'CURRENT_QUESTION';
export const CurrentQuestion = function (userId) {
  return dispatch => {
    return fetch('api/questions/nextquestion/' + userId)
    .then(function(response, error) {
     return response.json();
     console.log("1st response" + response)
    }).then(function(response) {
      console.log("2nd response" + response)
      return dispatch(questionSuccess(response))
    });
  }
};



 //   function callback(res){
    //   dispatch(questionSuccess(res))
    // }


//waiting for oauth login
// for main page 'https://space-repetition-app-michellen.c9users.io/'
// for next question '/api/questions/nextquestion/:userId'
// To submit answer to database '/api/questions/:userId'



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
