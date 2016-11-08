//components for questions

var questionsInitialState = {
      isFetchingData: true,
      questions: [
        {
          question: "Japansese word 1", 
          answer:"MEH. idk"
        },
        {
          question: "bdrgds",
          answer: "$sresgesrgesrge"
        }, 
        {
          question: "serhryjytj",
          answer:"$strhsrth"
        }
      ]
}


import React, { Component } from 'react';

class Questions extends Component {
    constructor () {
      super();
        this.state = questionsInitialState
    }
  render() {
    return (
        <div className="App-Questions">
           {this.state.questions.map((question, index) => {
           return <li key={index}> Question {question.question} {question.answer}</li>
         })}
         </div>
    );
  }
}

export default Questions;