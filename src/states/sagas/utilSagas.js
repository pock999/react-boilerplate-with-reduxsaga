import { call, put, cancelled, takeEvery, takeLatest } from 'redux-saga/effects';

const { utilSagaAction } = window;

export const utilSagas= [
  takeEvery(utilSagaAction.HANDLE_ALERT_ACTION, HandleAlertAction),
];

function* HandleAlertAction(action) {
  const payload = action.payload;
  yield put({

  });
}
