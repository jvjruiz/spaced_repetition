//components for questions
import questionSuccess from '../actions/actions';
import { fetchNextQuestion } from '../actions/actions';
import React, { Component } from 'react';
import { updateQueue } from '../actions/actions';
import {checkAnswer} from '../actions/actions';
import { connect } from 'react-redux';
var router = require('react-router');
var Link = router.Link;

import {submitAnswerSuccess} from '../actions/actions'
import {fetchUserScore} from '../actions/actions'

class Questions extends Component {
  submitAnswer (event) {
        event.preventDefault();
        this.props.checkUserAnswer(this.refs.answerInput.value,this.props.currentId);
        this.props.updateQueue(this.props.currentId, this.props.isCorrect);
        this.refs.answerInput.value = "";
   }
  componentWillMount(){
        this.props.onLoad(this.props.currentId);
  }
  render() {
    return (
        <div className="App-Questions">
          <h2> {this.props.currentQuestion.question}</h2>
          <h3> Translate the Japanese word to English </h3>
        
          <form >
              <input type="text" ref="answerInput" />
              
              <button type ='submit' onClick={this.submitAnswer.bind(this)}><h3>Enter</h3></button>
              
          </form>
            <Link to={'/feedback'}>
              <h6 className="enter-button">Next</h6>
            </Link>
          <div>
            {this.props.currentScore}
          </div>
        </div>
        
    );
  }
}

const mapStateToProps = (state) => {
    return {
      name: state.name,
      currentId: state.userId,
      currentQuestion: state.currentQuestion,
      isCorrect: state.isCorrect
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkUserAnswer: function(answerInput,userId) {
            dispatch(checkAnswer(answerInput))
        },
        onLoad: function(userId) {
            dispatch(fetchNextQuestion(userId));
        },
        updateQueue : function (userId, isCorrect) {
          dispatch(updateQueue(userId, isCorrect));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions); 