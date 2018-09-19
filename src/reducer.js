import {fromJS} from 'immutable'
import {UPDATE} from './actions'
const initState = fromJS({
    test:'Hello'
})
const firstReducer = function(state=initState,action){
    switch (action.type) {
        case UPDATE:
            return state.update('test',(data)=> action.data)
        default:
            return state
    }
}
export default firstReducer