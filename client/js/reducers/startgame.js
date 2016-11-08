import {createStore} from "redux";
//import START_GAME '../actions/actions'
import startGame from "../actions/actions"



const startgame = function (state,action) {
    state = state || initialState;
    switch(action.type) {
        case START_GAME:
            newState = Object.assign({}, state, {
                START_GAME: true,
                //IS THIS CORRECT?
                payload: true
        });
        return newState;
    }
    return state;
}

