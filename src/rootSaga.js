import { fork ,all} from "redux-saga/effects";
import loginSaga from '@page/Login/saga'
export default function* rootSaga(){
    yield all([
        fork(loginSaga)
    ])
}