import {
  all, fork, takeLatest, put, call, takeEvery, delay
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
} from '../reducers/user';

function loginAPI() {

}

function signUpAPI(signUpData) {
  return axios.post('http://localhost:3005/api/user/', signUpData);
}

function* login() {
  try {
    // yield call(loginAPI);
    yield delay(2000);
    yield put({
      type: LOGIN_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOGIN_FAILURE
    });
  }
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    yield delay(2000);
    yield put({
      type: SIGN_UP_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp)
  ]);
}
