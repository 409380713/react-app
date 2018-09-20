import {UPDATE_USER_MESSAGE} from './actions'
import {fromJS} from 'immutable'
const initState = fromJS({
    userMessage:{}
})
function updateUserMessageReducer (state = initState,actions) {
    switch (actions.type) {
        case UPDATE_USER_MESSAGE:
            return state.update('userMessage',(data)=>actions.data)
        default:
            return state
    }
}
export default updateUserMessageReducer