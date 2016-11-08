import { combineReducers } from 'redux'
import counter from './counter'
import startgame from './reducers/startgame'

const reducers = combineReducers({
  counter,
  startgame
  
})

export default reducers 


