import { all } from 'redux-saga/effects'
import Login from './signup'
import userSaga from './user'

export default function* rootSaga() {
    yield all([
        Login(),
        userSaga()
    ])
}