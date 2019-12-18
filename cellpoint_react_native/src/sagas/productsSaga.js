import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import { ADD_PRODUCT, REQUEST, SUCCESS, FAIL } from '../constants/actionTypes';

function* addProduct({ payload, meta }) {
  const { resetForm, setStatus, setSubmitting } = meta;
  yield call(setSubmitting, true);
  try {
    const res = yield call(fetch, 'http://localhost:3004/products', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const product = yield res.JSON();
    yield put({ type: `${ADD_PRODUCT}_${SUCCESS}`, payload: product });
    // yield call(resetForm);
    const navigateAction = NavigationActions.navigate({
      routeName: 'Settings',
    });

    yield put(navigateAction);
  } catch (error) {
    yield put({ type: `${ADD_PRODUCT}_${FAIL}`, payload: error });
    yield call(setStatus, { successMessage: error.message });
  } finally {
    yield call(setSubmitting, true);
  }
}

function* addProductRequest() {
  yield takeLatest(`${ADD_PRODUCT}_${REQUEST}`, addProduct);
}

export default function* root() {
  yield all([fork(addProductRequest)]);
}
