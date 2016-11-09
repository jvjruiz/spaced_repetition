//feedback component
import React, { Component } from 'react'


class Feedback extends Component {
    if(answerKey == user.input){
        onButtonClick() {
        console.log('onButtonClick called');
        this.props.dispatch(submitAnswerSuccess())}
    
    render() {
        return (
            <div className="App-Feedback">
            <h1> Yay. Ya did it. </h1>
               <button onClick={this.onButtonClick.bind(this)} type ='button'><h1>Next Question </h1></button>
             </div>
            );
        }
    }
    else {
        onButtonClick() {
        console.log('onButtonClick called');
        this.props.dispatch(submitAnswerSuccess())}
    
    render() {
        return (
            <div className="App-Feedback">
            <h1> Nah, bro. It's wrong. </h1>
               <button onClick={this.onButtonClick.bind(this)} type ='button'><h1>Next Question </h1></button>
             </div>
            );
        }
    }
}




//  if() {
//   var feedback = 'awesome';
//   this.props.dispatch(gatherFeedback(feedback))
// } else if() {
//   var feedback = 'nearly there';
//   this.props.dispatch(gatherFeedback(feedback))
// } 

export default Questions;
