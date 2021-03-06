//feedback component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchNextQuestion} from '../actions/actions';
var router = require('react-router');
var Link = router.Link;

class Feedback extends Component {

         onButtonClick() {
         this.props.dispatch(fetchNextQuestion(this.props.userId))
         }
         
     render() {
        return (
            <div className="App-Feedback">
            <h1 id="correct">{this.props.isCorrect ? <span id="right">{this.props.currentFeedback}</span> : <span id= "wrong">{this.props.currentFeedback}</span>}</h1>
            <h3> Current Score is {this.props.userScore} </h3>
                <Link to={'/questions'}>
                  <button onClick={this.onButtonClick.bind(this)} type ='button'><h1>Next Question </h1></button>
                </Link>
              </div>
             );
         }
    }
   
const mapStateToProps = (state) => {
    return {
        isCorrect: state.isCorrect,
        userId: state.userId,
        userScore: state.userScore,
        currentFeedback: state.currentFeedback
    };
};

export default connect(mapStateToProps)(Feedback);
