import { all } from 'redux-saga/effects';

import { userSagaWatcher } from './user/user-saga';

export function* rootSaga() {
  yield all([
    // ... put your sagas here
    userSagaWatcher()
  ]);
}
