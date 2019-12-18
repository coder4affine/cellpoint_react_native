import { all, fork, takeLatest, call, put, delay } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { LOAD_USERS, REGISTER_USER, SUCCESS, FAIL, REQUEST } from '../constants/actionTypes';

function* loadUsers() {
  try {
    yield delay(3000);
    const res = yield call(fetch, 'http://localhost:3004/users');
    const users = yield res.json();
    yield put({ type: `${LOAD_USERS}_${SUCCESS}`, payload: users });
  } catch (error) {
    yield put({ type: `${LOAD_USERS}_${FAIL}`, payload: error });
  }
}

function* registerUser({ payload, meta }) {
  const { resetForm, setStatus, setSubmitting } = meta;
  yield call(setSubmitting, true);
  try {
    const res = yield call(fetch, 'http://localhost:3004/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const user = yield res.json();
    yield put({ type: `${REGISTER_USER}_${SUCCESS}`, payload: user });
    yield call(resetForm);
    const navigateAction = NavigationActions.navigate({
      routeName: 'Users',
    });

    yield put(navigateAction);
  } catch (error) {
    yield put({ type: `${REGISTER_USER}_${FAIL}`, payload: error });
    yield call(setStatus, { successMessage: error.message });
  } finally {
    yield call(setSubmitting, false);
  }
}

function* registerUserRequest() {
  yield takeLatest(`${REGISTER_USER}_${REQUEST}`, registerUser);
}

function* loadUsersRequest() {
  yield takeLatest(`${LOAD_USERS}_${REQUEST}`, loadUsers);
}

export default function* root() {
  yield all([fork(loadUsersRequest), fork(registerUserRequest)]);
}
