import {
  all, fork, takeLatest, put, call, takeEvery, delay
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from '../reducers/user';

axios.defaults.baseURL = 'http://localhost:3005/api';

function logInAPI(loginData) {
  return axios.post('/user/login', loginData, {
    withCredentials: true
  });
}

function logOutAPI() {
  return axios.post('/user/logout', {}, {
    withCredentials: true
  });
}

function loadUserAPI(userId) {
  return axios.get(userId ? `/user/${userId}` : '/user/', {
    withCredentials: true
  });
}

function signUpAPI(signUpData) {
  return axios.post('/user/', signUpData);
}


function* login(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOGIN_FAILURE
    });
  }
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOGOUT_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOGOUT_FAILURE,
      error: e
    });
  }
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
      me: !action.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
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


function* watchLogOut() {
  yield takeEvery(LOGOUT_REQUEST, logOut);
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchLoadUser),
    fork(watchSignUp)
  ]);
}
