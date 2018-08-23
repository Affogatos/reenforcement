import { put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../constants/userDataConstants.js';

export const populateUserData = data => ({ type: types.POPULATE_USER_DATA, payload: data });
export const clearUserData = () => ({ type: types.CLEAR_USER_DATA });
export const addFavorite = petID => ({ type: types.ADD_FAVORITE_REQUEST, payload: petID });

export const getNewFavoriteID = state => state.userData.favoriteActionQuery;

function* startAddFavorite() {
  const petID = yield select(getNewFavoriteID);
  try {
    yield put({ type: types.ADD_FAVORITE_SUCCESS });
  } catch (error) {
    yield put({ type: types.ADD_FAVORITE_ERROR, payload: petID, error: error });
  }
}

export function* userDataWatcher() {
  yield takeLatest(types.ADD_FAVORITE_REQUEST, startAddFavorite);
}
