import {REQUEST_START,REQUEST_SUCCESS,REQUEST_ERROR} from './actions'
const initState = ''
export default function counter(state = initState, action) {
    switch (action.type) {
      case REQUEST_START:
        return state = '...'
      case REQUEST_SUCCESS:
        return state = action.data
      case REQUEST_ERROR:
        return state = action.data
      default:
        return state
    }
  }