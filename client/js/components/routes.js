var React= require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
import { IndexRoute } from 'react-router';
import Homepage from './Homepage';
import StartGame from './StartGame';
import Questions from './Questions';
import Feedback from './Feedback';
import Counter from './Counter';

var routes = (
    <Router history = {hashHistory}>
        <Route path ='/' component = {Homepage}/>
        <Route path ='/startGame' component = {StartGame}/>
        <Route path ='/feedback' component = {Feedback}/>
        <Route path ='/questions' component = {Questions}>
            <IndexRoute component= {Counter} />
        </Route>
    </Router>
);

  
         //make feedback a route
        //quiz route
        
module.exports = routes;