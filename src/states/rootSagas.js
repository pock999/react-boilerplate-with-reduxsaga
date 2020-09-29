import { call, put, cancelled, takeEvery, takeLatest, all } from 'redux-saga/effects';

import {
  utilSagas
} from './sagas';

export function* rootSagas() {
  yield all([
    ...utilSagas,
  ]);
}
