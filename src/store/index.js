import { createStore } from 'redux'
import todoApp from '../rootReducer'
function configureStore () {
    let store = createStore(
        todoApp
    )
    return store
}
export default configureStore