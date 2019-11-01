import { all, call } from 'redux-saga/effects';
import axios from 'axios';
import user from './user';
import comment from './comment';

axios.defaults.baseURL = 'http://localhost:3005/api';

export default function* rootSaga() {
  yield all([
    call(user),
    call(comment)
  ]);
}
