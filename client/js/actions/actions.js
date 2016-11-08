require('isomorphic-fetch');


//ACTION TO INCREASE COUNTER
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  }
} 

//ACTION TO START THE GAME
export const START_GAME = 'START_GAME'
export const startGame = () => {
  return {
    type: START_GAME,
    payload:false
  }
}

//ACTION TO GET CURRENT QUESTION (async, must return fetch)
export const CURRENT_QUESTION = 'CURRENT_QUESTION'
export const currentQuestion = () => {
  return {
    type: CURRENT_QUESTION,
    error: false
  }
}

//FEEDBACK
export const FEEDBACK = 'FEEDBACK'
export const Feedback = () => {
  return {
    type: FEEDBACK,
    payload: false,
    type: " "
  }
}




//AJAX CALL TO GET SUBREDDIT
// export const fetchVideo = () => {
//   return dispatch => {
//     dispatch(requestVideo())
//     return fetch('https://www.youtube.com/watch?v=JvdwowH_4Y8')
//       .then(response => response.json())
//       .then(json => dispatch(receiveVideo(json.video)))
//   }
// }

