import {all, fork} from 'redux-saga/effects';
import users from './usersSaga';

export default function* root() {
  yield all([fork(users)]);
}
