import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);


import React from 'react';
import Reactdom from 'react-dom';
import {Provider} from 'react-redux';
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';



const store = createStore(
  reducers, applyMiddleware(thunk));
//WHY IS THIS GIVING ME AN ERROR?
store.subscribe(() => {
    console.log("store changed", store.getState())
})
//I don't have an AJAX action yet
// store.dispatch(AJAX-ACTION ('reactjs')).then(()=> 
// console.log(store.getState())
// )

Reactdom.render(<App/>, document.getElementById('app'));

