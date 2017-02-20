import {createStore} from "redux";
import {LOG_IN_BUTTON} from '../actions/actions'
import {LOG_IN_SUCCESS} from '../actions/actions';
import {CURRENT_USER} from '../actions/actions';
import {START_GAME} from '../actions/actions';
import {QUESTION_SUCCESS} from '../actions/actions';
import {QUESTION_CORRECT} from '../actions/actions';
import {FEEDBACK} from '../actions/actions';
import {LOG_IN_FAILURE} from '../actions/actions';
import {USER_ANSWER} from '../actions/actions';
import {USER_DATA_TO_STATE} from '../actions/actions';
import {FETCH_USER_SCORE_SUCCESS} from '../actions/actions'

const initialState = {
    isUserVisible: false,
    userId: null,
    isQuestionVisible: false,//boolean in state for question transition (if true, I don't want to render anything but feedback)
    currentQuestion: {},
    currentUser: null,
    counter: 0,
    isCorrect: false,
    currentAnswerInput: '',
    userToken: null,
    userScore: 0
    
};
const reducers = function (state = initialState ,action) {
    var newState
    function assignState(newState){
      return Object.assign({}, state, newState);
    } 
    switch(action.type) {
        case LOG_IN_SUCCESS:
            return assignState({
                logInSuccess: action.payload
            })
        case LOG_IN_FAILURE: 
            return assignState({
                logInFailure: action.error
            });
        case CURRENT_USER: 
            return assignState({
               isUserVisible: true 
            });
        case START_GAME:
            return assignState({
                isQuestionVisible: true
            });
        case QUESTION_SUCCESS:
            return assignState({
                currentQuestion: action.payload
            });
        case USER_ANSWER:
			if(action.payload.toString().toLowerCase() === state.currentQuestion.answer.toString().toLowerCase()) {
				newState = Object.assign({}, state, {
					currentAnswerInput: action.answer,
					currentFeedback: 'Correct!',
					isCorrect: true,
					showNextQuestionButton: true,
					userScore: state.userScore + 1
				});
			}	
			else {
				newState = Object.assign({}, state, {
					currentAnswerInput: action.answer,
					currentFeedback: 'Incorrect, please try again.',
					isCorrect: false,
					showNextQuestionButton: true
				});
			}
			return newState;
		
		case USER_DATA_TO_STATE:
		    newState = Object.assign({}, state, {
		        userId: action.userId,
		        userToken: action.accessToken
		    });
		    return newState
		    
        default:
            return state;
            
    }
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'QUESTION_CORRECT':
      return Object.assign({}, state, { count: state.count + 1 });
    default:
      return state;
  }
};

export default reducers;