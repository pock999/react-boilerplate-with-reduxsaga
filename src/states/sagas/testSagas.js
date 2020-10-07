import { call, put, cancelled, takeEvery, takeLatest } from 'redux-saga/effects';
import { TestAction } from '../reducerActions';

const { testSagaAction } = window;

export const testSagas= [
  takeEvery(testSagaAction.HANDLE_TEST_ACTION, HandleLoginAction),
];

function* HandleLoginAction(action) {
  const { payload } = action;
  console.log(payload);
  console.log('saga dispatch');
  yield put(TestAction.HandleTest(payload));
}