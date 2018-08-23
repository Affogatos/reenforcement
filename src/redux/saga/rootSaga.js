import { loginWatcher, logoutWatcher } from '../actions/authenticationActions.js';
import { petSearchWatcher } from '../actions/searchPetsActions.js';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([loginWatcher(), logoutWatcher(), petSearchWatcher()]);
}
