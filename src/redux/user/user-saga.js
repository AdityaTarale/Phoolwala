import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getUser, requestUser, setUser } from './user-slice';

const fetchUser = () => {
  return axios.request({
    method: 'get',
    url: 'https://my-json-server.typicode.com/AdityaTarale/demo/user'
  });
};

function* userEffect() {
  yield put(requestUser());
  try {
    const response = yield call(fetchUser);
    yield put(setUser(response.data));
  } catch (error) {
    // console.log(error);
  }
}

export function* userSagaWatcher() {
  yield takeLatest(getUser.type, userEffect);
}
