import * as types from '../constants/userDataConstants.js';

export const populateUserData = data => ({ type: types.POPULATE_USER_DATA, payload: data });
export const clearUserData = () => ({ type: types.CLEAR_USER_DATA });
