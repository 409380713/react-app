import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../rootSaga'
const sagaMiddleware = createSagaMiddleware()
function configureStore () {
    let store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore