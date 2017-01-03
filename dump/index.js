//node modules
import 'babel-polyfill';
var React = require('react')
var ReactDOM = require('react-dom')
var Provider = require('react-redux').provider
//components
var Login = require('./components/login')
var quizPage = require('./components/quizPage')
var Questions = require('./components/Questions')
//redux 
var store = require('./store')
//router
var router = require('react-router');
var Route = router.Route;
var Router = router.Router;
var browserHistory = router.BrowserHistory;


// var routes = (
// 	<Router history={browserHistory}>
// 		<Route path="/" component={Questions}/>
// 	</Router>
// )

//<Route path="/login" component={Login}/>

document.addEventListener("DOMContentLoaded", function() { 
	ReactDOM.render(<Provider store={store}>{Questions}</Provider>, document.getElementById("app")); 
});


