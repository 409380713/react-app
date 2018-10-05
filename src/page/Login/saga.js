import { put, call,takeLatest } from 'redux-saga/effects'
import http from '@/fetch/http'
import { LOGIN } from '@/fetch/apis'
import { updateUserMessage, REQUEST_LOGIN } from './actions'
console.log('Loginsaga')
function* loginSaga(action) {
    try {
        const result = yield call(http.post, LOGIN, action.data)
        yield put(updateUserMessage({ ...result, isLoginSuccess: true }))

    } catch (error) {
        console.log(error)
    }
}
export default function* watchLoginSaga() {
    yield takeLatest(REQUEST_LOGIN, loginSaga)
}