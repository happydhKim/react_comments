import {
  all, fork, takeLatest, call, put
} from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../reducers/user';

function loginAPI() {

}

function* login() {
  try {
    yield call(loginAPI);
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

export default function* userSaga() {
  yield all([
    fork(watchLogin)
  ]);
}
