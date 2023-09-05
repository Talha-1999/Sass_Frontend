import * as actions from "./reducer";
import { call, put, takeLatest } from "redux-saga/effects";
import { BASE_URL } from './baseUrl'
import { message } from 'antd'
import axios from 'axios'

const GoDashboard = (response) => {
    const { id } = response.data[0]
    const link = document.createElement('a')
    link.setAttribute('href', `http://localhost:3001/app/dashboards/default/${id}`)
    link.click()

}

function* submitLoginForm({ payload }) {
    try {
        if (!payload.email || !payload.password) {
            message.error("Please Fill")
        } else {
            const response = yield call(axios.post, `${BASE_URL}/signin/login`, payload)
            if (response.data.message == 'User Not Exist' || response.data.message == 'Password Not Valid') {
                message.error(response.data.message)
            } else if (response.data.message == 'Email Send Successfully') {
                message.warning("Please Verify Your Email")
            }
            if (response.data.length) {
                GoDashboard(response)
            }
        }
    } catch (e) {
        message.error("Error")
    }
}

function* submitRegisterForm({ payload }) {
    try {
        const response = yield call(axios.post, `${BASE_URL}/signin/create`, payload)
        if (response.data.message == 'Email Send Successfully') {
            message.success('Please Check Your Email')
        } else if (response.data.message == 'User Already Exist') {
            message.warning(response.data.message)
        } else {
            message.error(response.data.message)
        }
    } catch (err) {
        message.error("Error")
    }
}

function* Login() {
    yield takeLatest("SUBMIT_LOGIN_FORM", submitLoginForm);
    yield takeLatest("SUBMIT_SIGNUP_FORM", submitRegisterForm)
}
export default Login;
