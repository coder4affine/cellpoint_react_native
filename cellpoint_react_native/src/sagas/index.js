import { all, fork } from 'redux-saga/effects';
import users from './usersSaga';
import products from './productsSaga';

export default function* root() {
  yield all([fork(users), fork(products)]);
}
