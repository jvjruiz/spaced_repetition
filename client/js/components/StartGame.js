import React, { Component } from 'react';
import { StartGame } from '../actions/actions';
import { connect } from 'react-redux';
var router = require('react-router');
var Link = router.Link;

import {submitAnswerSuccess} from '../actions/actions'
import {userDataToState} from '../actions/actions'

class StartGameButton extends Component {
  
  componentDidMount(){
    var accessToken = this.props.location.query.access_token
    var userId = this.props.location.query.userId
    this.props.dispatch(userDataToState(userId,accessToken))
  }
  
  onButtonClick(event) {
    console.log('onButtonClick called');
    this.props.dispatch(submitAnswerSuccess(this.props.currentId));
  }
  //how do I write, if the user clicks the button ,I want to render the current question
  render() {
    return (
        <div id="start-game-button">
        <h3> Hello </h3>
        <Link to={'/questions'}>
        <button onClick={this.onButtonClick.bind(this)} type ='button'><h1>START GAME </h1></button>
        </Link>
        </div>
    );
  }
}

//pulls from the state
const mapStateToProps = (state) => {
  return {
    currentId: state.currentId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userDataToState: function(userId, accessToken) {
      dispatch(userDataToState(userId, accessToken))
    }
  }
}


export default connect(mapStateToProps)(StartGameButton); 