//feedback component
import React, { Component } from 'react'

var InitialFeedback = {
      Feedback: [
        {
          comment: "Great job!", 
          
        },
        {
          comment: "Try and Remember this!",
         
        }
      ]
};

class Feedback extends Component {
    constructor () {
    super();
    this.state = InitialFeedback;
    }
  render() {
    return (
        <div className="App-Feedback">
           {this.state.Feedback.map((comment, index) => {
               return <li key={index}> FEEDBACK {comment.comment}</li>;
           })}
         </div>
    );
  }
}

export default Questions;
