import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);


import React from 'react';
import Reactdom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import App from './App';




export default store;
Reactdom.render(<Provider store ={store}><App/></Provider>, document.getElementById('app'));
//Provider allows you to connect to redux to react

