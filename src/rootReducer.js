import { combineReducers } from 'redux'
import firstReducer from './reducer'
import updateUserMessageReducer from '@page/Login/reducer'
import demoCounter from './page/Demo/reducer'
const todoApp = combineReducers({
  firstReducer,
  updateUserMessageReducer,
  demoCounter
})
export default todoApp