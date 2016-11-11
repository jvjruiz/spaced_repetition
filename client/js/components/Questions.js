//components for questions
import questionSuccess from '../actions/actions';
import { CurrentQuestion } from '../actions/actions';
import React, { Component } from 'react';
import { submitAnswer } from '../actions/actions';
import {userAnswer} from '../actions/actions';
import { connect } from 'react-redux';
var router = require('react-router');
var Link = router.Link;


class Questions extends Component {
  submitAnswer (event) {
        event.preventDefault();
        this.props.checkAnswer(this.refs.answerInput.value);
        this.props.updateQueue(this.props.currentId, this.props.isCorrect);
        this.refs.answerInput.value = "";
        
   }
  componentWillMount(){
        this.props.currentQuestion1(this.props.currentId);
  }
  render() {
    return (
        <div className="App-Questions">
          <h2> Japanese word {this.props.currentQuestion.question}</h2>
          <h4> Translate the Japanese word to English </h4>

          <form >
              <input type="text" ref="answerInput" />
              <button type ='submit' onClick={this.submitAnswer.bind(this)}><h3>Submit Answer</h3></button>
          </form>
            <Link to={'/feedback'}>
              <h3>Go to feedback</h3>
            </Link>
        </div>
    );
  }
}

//pulls from the state
const mapStateToProps = (state) => {
    return {
      name: state.name,
      currentId: state.userId,
      currentQuestion: state.currentQuestion
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkAnswer: function(answerInput) {
            dispatch(userAnswer(answerInput))
        },
        currentQuestion1: function(userId) {
            dispatch(CurrentQuestion(userId));
        },
        updateQueue : function (userId, isCorrect) {
          dispatch(submitAnswer(userId, isCorrect));
        }
    };
};

//

//dispatchs an action that calls the reducer (called 'dispatch to props' because it's not mutating the state)
// const mapDispatchToProps = (dispatch) => {
//   return {
//     StartGame: () => dispatch(StartGame)
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Questions); 