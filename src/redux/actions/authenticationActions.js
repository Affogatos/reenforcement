import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../constants/authenticationConstants.js';
import { checkAuthReq, logOutReq } from '../utils/authCookieActions.js';
import { populateUserData, clearUserData } from './userDataActions.js';

export const logIn = () => ({ type: types.LOG_IN_REQUEST });
export const logOut = () => ({ type: types.LOG_OUT_REQUEST });

function* startLogIn() {
  try {
    const { data } = yield checkAuthReq();
    if (data.isAuthenticated) {
      yield put({ type: types.LOG_IN_SUCCESS, uuid: data.uuid });
      yield put(populateUserData(data));
    } else {
      yield put({ type: types.LOG_IN_ERROR, error: 'user not logged in' });
    }
  } catch (error) {
    yield put({ type: types.LOG_IN_ERROR, error });
  }
}

function* startLogout() {
  try {
    yield put(clearUserData());
    const logoutResult = yield logOutReq();
    yield put({ type: types.LOG_OUT_SUCCESS });
  } catch (error) {
    yield put({ type: types.LOG_OUT_ERROR });
  }
}

export function* loginWatcher() {
  yield takeLatest(types.LOG_IN_REQUEST, startLogIn);
}

export function* logoutWatcher() {
  yield takeLatest(types.LOG_OUT_REQUEST, startLogout);
}
