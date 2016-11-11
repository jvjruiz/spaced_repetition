
import React from 'react';
import reducers from '../reducers'; 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/*
example state:
  {
    currentUserId: 'sejf7843tberf', 
  }
*/


const store = createStore(
  reducers, applyMiddleware(thunk));

store.subscribe(() => {
   
});

//I don't have an AJAX action yet
// store.dispatch(AJAX-ACTION ('reactjs')).then(()=> 
// console.log(store.getState())
// )

export default store;