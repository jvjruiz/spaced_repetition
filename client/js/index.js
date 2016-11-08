import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);


import React from 'react';
import Reactdom from 'react-dom';
import {Provider} from 'react-redux';
import reducers from './reducers'
import App from './App';


Reactdom.render(<App/>, document.getElementById('app'));

