import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);


import React from 'react';
import Reactdom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import routes from './components/routes'

export default store;
Reactdom.render(<Provider store ={store}>{routes}</Provider>,
    document.getElementById('app'));
  

