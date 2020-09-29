import { call, put, cancelled, takeEvery, takeLatest } from 'redux-saga/effects';

export const utilSagas= [
  takeEvery("HANDLE_ALERT_ACTION", HandleAlertAction),
];

function* HandleAlertAction(action) {
  console.log('handle alert sagas');
  const payload = action.payload;
  yield put({

  });
}
