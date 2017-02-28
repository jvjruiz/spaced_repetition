import {createStore} from "redux";
import {START_GAME} from '../actions/actions';
import {FETCH_NEXT_QUESTION_SUCCESS} from '../actions/actions';
import {QUESTION_CORRECT} from '../actions/actions';
import {FEEDBACK} from '../actions/actions';
import {LOG_IN_FAILURE} from '../actions/actions';
import {CHECK_ANSWER} from '../actions/actions';
import {USER_DATA_TO_STATE} from '../actions/actions';
import {FETCH_USER_SCORE_SUCCESS} from '../actions/actions'

const initialState = {
    isUserVisible: false,
    userId: null,
    isQuestionVisible: false,
    currentQuestion: {},
    currentUser: null,
    counter: 0,
    isCorrect: false,
    currentAnswerInput: '',
    userToken: null,
    userScore: 0,
    currentFeedback: ''
};

const reducers = function (state = initialState ,action) {
    var newState
    function assignState(newState){
      return Object.assign({}, state, newState);
    } 
    switch(action.type) {
        
        case FETCH_NEXT_QUESTION_SUCCESS:
            return assignState({
                currentQuestion: action.payload
            });
            
        case CHECK_ANSWER:
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
					currentFeedback: 'You have answered incorrectly.',
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

export default reducers;