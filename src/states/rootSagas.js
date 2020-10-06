import { call, put, cancelled, takeEvery, takeLatest, all } from 'redux-saga/effects';

import {
  utilSagas,
  testSagas,
} from './sagas';

export function* rootSagas() {
  yield all([
    ...utilSagas,
    ...testSagas,
  ]);
}
