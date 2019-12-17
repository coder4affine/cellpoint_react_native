import {all, fork, takeLatest, call, put, delay} from 'redux-saga/effects';

function* loadUsers() {
  try {
    yield delay(3000);
    const res = yield call(fetch, 'http://localhost:3004/users');
    const users = yield res.json();
    yield put({type: 'LOAD_USERS_SUCCESS', payload: users});
  } catch (error) {
    yield put({type: 'LOAD_USERS_FAIL', payload: error});
  }
}

function* loadUsersRequest() {
  yield takeLatest('LOAD_USERS_REQUEST', loadUsers);
}

export default function* root() {
  yield all([fork(loadUsersRequest)]);
}
