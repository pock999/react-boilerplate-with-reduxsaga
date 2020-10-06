import { call, put, cancelled, takeEvery, takeLatest } from 'redux-saga/effects';

export const testSagas= [
  takeEvery("HANDLE_TEST_LOGIN_ACTION", HandleLoginAction),
];

function* HandleLoginAction(action) {
  const { payload } = action;
  console.log(payload);
  yield put({
    type: 'HANDLE_TEST',
    payload,
  });
}