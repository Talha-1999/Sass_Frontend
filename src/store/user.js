import * as actions from "./reducer";
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { BASE_URL } from "./baseUrl";


function* getPackage() {
    try {
        const respo = yield call(axios.post, `${BASE_URL}/packages/get-all`)
        if (respo.data.length) {
            let data = respo.data
            yield put(actions.Packages(data))
        }
    } catch (e) {
        console.log(e)
    }
}


function* userSaga() {
    yield takeLatest("GET_PACKAGE", getPackage);
}
export default userSaga;
