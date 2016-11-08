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
    //WHAT IS CONSTRUCTOR AND this.state DOING?
    constructor () {
    super();
    this.state = " ";
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
