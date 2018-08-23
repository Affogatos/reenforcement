import * as types from '../constants/authenticationConstants.js';

const initialState = {
  isAuthenticated: false,
  authenticating: false,
  error: null,
  loggingOut: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN_REQUEST:
      return { ...state, isAuthenticated: false, authenticating: true, error: null };
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        authenticating: false,
      };
    case types.LOG_IN_ERROR:
      return {
        ...state,
        authenticating: false,
        error: action.error,
      };
    case types.LOG_OUT_REQUEST:
      return { ...state, loggingOut: true };
    case types.LOG_OUT_SUCCESS:
      return { ...state, loggingOut: false, isAuthenticated: false };
    case types.LOG_OUT_REQUEST:
      return { ...state, loggingOut: false, error: action.error };
    default:
      return state;
  }
};
