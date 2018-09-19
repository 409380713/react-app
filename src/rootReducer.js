import { combineReducers } from 'redux'
import firstReducer from './reducer'
const todoApp = combineReducers({
    firstReducer,
  })
  export default todoApp