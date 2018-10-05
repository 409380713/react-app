import React from 'react'
import { put, call,takeLatest } from 'redux-saga/effects'
import {delay} from 'redux-saga'
import http from '@/fetch/http'
import { LOGIN } from '@/fetch/apis'
import { push } from 'react-router-redux'
import { updateUserMessage, REQUEST_LOGIN } from './actions'
import {  Toast } from 'antd-mobile'
console.log('Loginsaga')
function* loginSaga(action) {
    try {
        Toast.info('登陆中...',1)
        const result = yield call(http.post, LOGIN, action.data)
        yield put(updateUserMessage({ ...result, isLoginSuccess: true }))
        yield delay(1000)
        yield put(push('/container/home'))
       
    } catch (error) {
        console.log(error)
    }
}
export default function* watchLoginSaga() {
    yield takeLatest(REQUEST_LOGIN, loginSaga)
}