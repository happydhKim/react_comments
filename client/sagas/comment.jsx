import {
  all, fork, takeLatest, put, call
} from 'redux-saga/effects';
import axios from 'axios';
import { ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from '../reducers/comment';

function addCommentAPI(commentData) {
  return axios.post('/comment', commentData, {
    withCredentials: true
  });
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data
    });
    yield put({
      type: ADD_COMMENT_TO_ME,
      data: result.data.id
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
