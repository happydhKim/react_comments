import {
  all, fork, takeLatest, call, put, takeEvery, delay
} from 'redux-saga/effects';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
} from '../reducers/user';

function loginAPI() {

}

function signUpAPI() {

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

function* signUp() {
  try {
    yield call(signUpAPI);
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

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin)
  ]);
}
