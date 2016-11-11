
import React from 'react';
import reducers from '../reducers'; 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

var actions = require('../actions/actions')
var currentQuestion = actions.CurrentQuestion


const store = createStore(
  reducers, applyMiddleware(thunk));

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch(currentQuestion)

export default store;