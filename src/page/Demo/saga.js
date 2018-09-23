import { takeEvery } from 'redux-saga'
import { put ,call} from 'redux-saga/effects'
import {onRequestSuccess,REQUEST_START } from './actions'
import http from '@/fetch/http'
import {LOGIN} from '@/fetch/apis'
// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
// Our worker Saga: 将异步执行 increment 任务
export function* incrementAsync(action) {
	const {status,statusMsg} =  yield call(http.post,LOGIN,action.data)
  	yield put(onRequestSuccess(statusMsg));
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export default function* watchIncrementAsync() {
  	yield* takeEvery(REQUEST_START, incrementAsync);
}