//components for questions
import questionSuccess from '../actions/actions';
import { CurrentQuestion } from '../actions/actions';
import React, { Component } from 'react';
import { submitAnswer } from '../actions/actions';
import {userAnswer} from '../actions/actions'
import { connect } from 'react-redux'
var router = require('react-router');
var Link = router.Link;


class Questions extends Component {
  onButtonClick() {
    console.log(this.props)
    this.props.submitAnswer;
  }
  ontheSubmit (event) {
        event.preventDefault();
        
        this.props.onAddSubmit(this.refs.answerInput.value);
        console.log(this.props.name)
        this.props.submitAnswer;
        this.refs.answerInput.value = "";
   }
  componentWillMount(){
    console.log(this.props)
        this.props.currentQuestion1(this.props.currentId);
  }
  render() {
    return (
        <div className="App-Questions">
          <h3> Japanese word {this.props.currentQuestion.question}</h3>
          <h3> Translate the Japanese word to English </h3>
          <form onSubmit={this.ontheSubmit}>
              <input type="text" ref="answerInput" />
              <Link to={'/feedback'}>
              <button type ='button'><h3>Submit Answer</h3></button>
              </Link> 
              
          </form>
        </div>
    );
  }
}

//pulls from the state
const mapStateToProps = (state) => {
  console.log("this is the state" + state)
  return {
    name: state.name,
    currentId: state.userId,
    currentQuestion: state.currentQuestion
    
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddSubmit: function(answerInput) {
            dispatch(userAnswer(answerInput));
        },
        currentQuestion1: function(userId) {
            dispatch(CurrentQuestion(userId))
        },
        submitAnswer : function (userId) {
          dispatch(submitAnswer(this.props.currrentId, true))
        }
    }
}

//dispatchs an action that calls the reducer (called 'dispatch to props' because it's not mutating the state)
// const mapDispatchToProps = (dispatch) => {
//   return {
//     StartGame: () => dispatch(StartGame)
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Questions); 