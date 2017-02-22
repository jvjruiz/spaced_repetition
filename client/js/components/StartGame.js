import React, { Component } from 'react';
import { connect } from 'react-redux';
var router = require('react-router');
var Link = router.Link;

import {submitAnswerSuccess} from '../actions/actions'
import {userDataToState} from '../actions/actions'

class StartGameButton extends Component {
  
  componentDidMount(){
    var accessToken = this.props.location.query.access_token
    var userId = this.props.location.query.userId
    this.props.userDataToState(userId,accessToken)
  }
  
  render() {
    return (
        <div id="start-game-button">
        <div id = "explaination-container">
        <h3 id="explaination">Spaced repetition is a learning technique that incorporates increasing intervals of time between subsequent review of previously learned material in order to exploit the psychological spacing effect. </h3>
        </div>
        
        <h3 id="explaination-paragraph">Alternative names include spaced rehearsal, expanding rehearsal, graduated intervals, repetition spacing, repetition scheduling, spaced retrieval and expanded retrieval.[1]
Although the principle is useful in many contexts, spaced repetition is commonly applied in contexts in which a learner must acquire a large number of items and retain them indefinitely in memory. It is, therefore, well suited for the problem of vocabulary acquisition in the course of second language learning, due to the size of the target language's inventory of open-class words.
 </h3>
 <h4> Instructions: Click 'Enter' to submit your answer then click 'Next' to see if you are correct.</h4>
        <Link to={'/questions'}>
        <button type ='button'><h1>START GAME </h1></button>
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


export default connect(mapStateToProps, mapDispatchToProps)(StartGameButton); 