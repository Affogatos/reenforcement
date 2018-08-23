import * as types from '../constants/searchPetsConstants.js';

const initialState = { searching: false, query: null, searchResults: [], error: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_PETS_REQUEST:
      return { ...state, searching: true, query: action.payload, error: null };
    case types.SEARCH_PETS_SUCCESS:
      return { ...state, searching: false, searchResults: action.payload, error: null };
    case types.SEARCH_PETS_ERROR:
      return { ...state, searching: false, error: action.error };
    default:
      return state;
  }
};
