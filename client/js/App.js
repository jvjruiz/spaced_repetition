import React, { Component } from 'react';
import StartGameButton from './components/StartGame';
import Counter from './components/Counter';
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