import { combineReducers } from 'redux'
import firstReducer from './reducer'
import updateUserMessageReducer from '@page/Login/reducer'
import updateBtnReducer from './page/Demo/reducer'
const todoApp = combineReducers({
  firstReducer,
  updateUserMessageReducer,
  updateBtnReducer
})
export default todoApp