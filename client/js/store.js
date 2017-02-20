var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;
var thunk = require('redux-thunk').default;

var reducer = require('./reducer/reducer')

var store = createStore(reducer, applyMiddleware(thunk));

module.exports = store;