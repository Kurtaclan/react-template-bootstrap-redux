import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import callApi from '../../util/callAPi';
import { fetchError, fetchSuccess } from './actions';
import * as ExampleActionTypes from './types';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || ''

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

function* handleFetch() {
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, '/example')

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(ExampleActionTypes.FETCH_REQUEST, handleFetch)
}

export function* exampleSaga() {
  yield all([fork(watchFetchRequest)])
}