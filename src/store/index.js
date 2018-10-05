import { createStore,applyMiddleware } from 'redux'
import { routerMiddleware, routerReducer} from 'react-router-redux'
import rootReducer from '../rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../rootSaga'

const sagaMiddleware = createSagaMiddleware()
const router = routerReducer
function configureStore (browHistory) {
    const middleware = routerMiddleware(browHistory)
    let store = createStore(
        rootReducer,
        router,
        applyMiddleware(sagaMiddleware,middleware)
    )
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore