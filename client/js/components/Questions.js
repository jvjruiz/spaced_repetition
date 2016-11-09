//components for questions

import React, { Component } from 'react';

class Questions extends Component {
  onButtonClick() {
    console.log('onButtonClick called');
    this.props.dispatch(submitAnswer(currrentId, true));
  }
  render() {
    return (
        <div className="App-Questions">
          <h3> Japanese word </h3>
            <h1>{this.props.dispatch(questionSuccess())}</h1>
          <h3> Translate the Japanese word to English </h3>
          <form>
            English answer:
            <input type="text" name="name" />
            <button onClick={this.onButtonClick.bind(this)} type ='button'><h3>Submit Answer </h3></button>
          </form>
        </div>
    );
  }
}

export default Questions;


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