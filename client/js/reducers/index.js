import { combineReducers } from 'redux'
import counter from './counter'
import startgame from './startgame'
import loginbutton from './login'


const reducers = combineReducers({
  counter,
  startgame,
  loginbutton
  
}, 

{})

export default reducers 


