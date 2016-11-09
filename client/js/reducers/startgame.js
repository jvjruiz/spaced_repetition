import {createStore} from "redux";
import START_GAME from '../actions/actions'
import QUESTION_SUCCESS from '../actions/actions'

const initialState = {
    isQuestionVisable: false
};

const startgame = function (state,action) {
    state = state || initialState;
    var newState;
    switch(action.type) {
        case START_GAME:
            newState = Object.assign({}, state, {
                isQuestionVisible: true
            });
            break;
        case QUESTION_SUCCESS:
            newState = Object.assign({}, state, {
                currentQuestion: action.payload
            });
        return newState;

    }
    return state;
}

export default startgame