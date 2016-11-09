import React, { Component } from 'react';
import StartGameButton from './components/StartGame';

import Counter from './components/Counter';
import Questions from './components/Questions';
import Homepage from './components/Homepage';
// remmeber to import Game component


class App extends Component {
  
  render() {
    if (!this.props.currentUser) {
      return(
        <div>
          <Homepage />
        </div>
      );
    }
    
    return (
      <div>
      <Game user={this.props.currentUser} />
      <StartGameButton />
      </div>
    );
  }
}

export default App;

//use react router to make different pages
//use react redux to change the state properly
//(map disptach to props map.state. to props) using connect method.