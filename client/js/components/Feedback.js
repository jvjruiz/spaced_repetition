//feedback component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {submitAnswer} from '../actions/actions';
import {submitAnswerSuccess} from '../actions/actions';
import {QuestionCorrect} from '../actions/actions';
var router = require('react-router');
var Link = router.Link;

class Feedback extends Component {

         onButtonClick() {
         this.props.dispatch(submitAnswer(this.props.userId, this.props.isCorrect))
         }
    
     //"?" is like an operator (tiny 'if' statement)
     render() {
        return (
            <div className="App-Feedback">
            <h1>{this.props.isCorrect ? "Yay" : "Boooo"}</h1>
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
        userId: state.userId
    };
};

export default connect(mapStateToProps)(Feedback);
