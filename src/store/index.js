import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../rootReducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from '@page/Demo/saga.js'
const sagaMiddleware = createSagaMiddleware()
function configureStore () {
    let store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(mySaga)
    return store
}

export default configureStore