import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);


import React from 'react';
import Reactdom from 'react-dom';
import {Provider} from 'react-redux';
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';



let store = createStore(reducers, applyMiddleware
//WHY IS THIS THE SECOND PARAMATER OF THE STORE?
	applyMiddleware	(
    		thunkMiddleware, // lets us dispatch() functions
    		loggerMiddleware // neat middleware that logs actions
    )
)

store.subscribe(() = > {
    console.log("store changed", store.getState())
})

store.dispatch(AJAX-ACTION ('reactjs')).then(()=> 
console.log(store.getState())
)

Reactdom.render(<App/>, document.getElementById('app'));

