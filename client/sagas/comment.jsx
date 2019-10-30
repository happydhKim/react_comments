import {
  all, fork, takeLatest, delay, put
} from 'redux-saga/effects';
import { ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from '../reducers/comment';

function* addComment() {
  try {
    yield delay(2000);
    yield put({
      type: ADD_COMMENT_SUCCESS
    });
  } catch (e) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: e
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* commentSaga() {
  yield all([
    fork(watchAddComment)
  ]);
}
