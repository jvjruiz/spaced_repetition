import React, { Component } from 'react';
import { StartGame } from '../actions/actions';
import { connect } from 'react-redux';

class StartGameButton extends Component {

  onButtonClick() {
    console.log('onButtonClick called');
    this.props.dispatch(StartGame());
    this.props.dispatch(currentQuestion(props.currentId));
  }
  //how do I write, if the user clicks the button ,I want to render the current question
  render() {
    return (
        <div id="start-game-button">
        <h3> Hello, {this.props.user} </h3>
        <button onClick={this.onButtonClick.bind(this)} type ='button'><h1>START GAME </h1></button>
        </div>
    );
  }
}

//pulls from the state
const mapStateToProps = (state) => {
  return {
    name: state.name,
    currentId: state.currentId
  };
};

//dispatchs an action that calls the reducer (called 'dispatch to props' because it's not mutating the state)
// const mapDispatchToProps = (dispatch) => {
//   return {
//     StartGame: () => dispatch(StartGame)
//   };
// };



export default connect(mapStateToProps)(StartGameButton); 