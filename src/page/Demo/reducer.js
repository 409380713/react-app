import {ACTIVE_BTN} from './actions'
const initState = 1
export default function updateBtnReducer(state = initState, action) {
    switch (action.type) {
      case ACTIVE_BTN:
        return action.data
      default:
        return state
    }
  }