import { loginWatcher, logoutWatcher } from '../actions/authenticationActions.js';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([loginWatcher(), logoutWatcher()]);
}
