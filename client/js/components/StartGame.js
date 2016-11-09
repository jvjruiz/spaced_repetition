import React, { Component } from 'react';
import StartGame from '../actions/actions';
import { connect } from 'react-redux'

class StartGameButton extends Component {

  onButtonClick() {
    this.props.dispatch(StartGame);
  }
  
  render() {
    return (
        <div id="start-game-button">
        <button onCLick={this.onButtonClick.bind(this)} type ='button'><h1>START GAME </h1></button>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    StartGame: () => dispatch(StartGame)
  }
}


const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

export default connect(mapDispatchToProp)(StartGameButton); 