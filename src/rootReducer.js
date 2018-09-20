import { combineReducers } from 'redux'
import firstReducer from './reducer'
import updateUserMessageReducer from '@page/Login/reducer'
const todoApp = combineReducers({
  firstReducer,
  updateUserMessageReducer
})
export default todoApp