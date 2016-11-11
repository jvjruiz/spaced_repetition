//components for questions
var React = require('react')
var connect = require('react-redux').connect
var Router = require('react-router');
var Link = Router.Link;

var actions = require('../actions/actions')
var checkAnswer = actions.checkAnswer
var updateQueue = actions.updateQueue


var Questions = React.createClass({
    onSubmit: function (event) {
        event.preventDefault();
        this.props.onAddSubmit(this.refs.answerInput.value,this.checkAnswer(this.refs.answerInput.value));
        this.refs.answerInput.value = "";
   },
   componentWillMount: function(){
    console.log(this.props)
        this.props.currentQuestion1(this.props.currentId);
  },
  checkAnswer: function(userInput){
      if(userInput == this.props.question.answer) {
          return true
      }
      else {
          return false
      }
  },
  render: function() {
    return (
        <div className="App-Questions">
          <h3> Japanese word {this.props.currentQuestion.question}</h3>
          <h3> Translate the Japanese word to English </h3>
          <form>
              <input type="text" ref="answerInput" />
              <Link to={'/feedback'}>
              <input type ='submit' onSubmit={this.onSubmit} ><h3>Submit Answer</h3></input>
              </Link> 
          </form>
        </div>
    );
  }
});

//pulls from the state
const mapStateToProps = (state) => {
   return {
    currentId: state.currentUserId,
    currentQuestion: state.currentQuestion.question
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddSubmit: function(answerInput,isCorrect) {
            dispatch(checkAnswer(answerInput));
            dispatch(updateQueue(isCorrect)) 
        }
    }
}


//dispatchs an action that calls the reducer (called 'dispatch to props' because it's not mutating the state)
// const mapDispatchToProps = (dispatch) => {
//   return {
//     StartGame: () => dispatch(StartGame)
//   };
// };

module.exports = connect(mapStateToProps, mapDispatchToProps)(Questions); 