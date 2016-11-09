import {createStore} from "redux";
import QUESTION_CORRECT from '../actions/actions'
import LOG_IN_SUCCESS from '../actions/actions';
import CURRENT_USER from '../actions/actions'

const initialState = {
    var feedback;
};

const feedback = function (state,action) {
    state = state || initialState;
    var newState;
    switch(action.type) {
        case QUESTION_CORRECT:
            newState = Object.assign({}, state, {
                FEEDBACK: true,
                feedback: "GREAT JOB"
            });
            break;
        case FEEDBACK:
            newState = Object.assign({}, state, {
                currentQuestion: action.payload
            });
        return newState;

    }
    return state;
}

export default feedback






//  if() {
//   var feedback = 'awesome';
//   this.props.dispatch(gatherFeedback(feedback))
// } else if() {
//   var feedback = 'nearly there';
//   this.props.dispatch(gatherFeedback(feedback))
// } 