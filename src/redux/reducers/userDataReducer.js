import * as types from '../constants/userDataConstants.js';

const initialState = {
  uuid: null,
  name: null,
  favorites: [],
  favoriteActionQuery: null,
  active: false,
  age: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_USER_DATA: {
      const { name, uuid, favorites, age } = action.payload;
      return { name, uuid, favorites, age };
    }
    case types.CLEAR_USER_DATA: {
      return initialState;
    }
    case types.ADD_FAVORITE_REQUEST: {
      let favorites = state.favorites;
      if (!favorites.some(x => x.petID === action.payload.petID)) {
        favorites = favorites.concat(action.payload);
      }
      return {
        ...state,
        favorites,
        active: true,
        favoriteActionQuery: action.payload,
        error: false,
      };
    }
    case types.ADD_FAVORITE_SUCCESS: {
      return { ...state, active: false, favoriteActionQuery: null };
    }
    case types.ADD_FAVORITE_ERROR: {
      let favorites = state.favorites.filter(x => x.petID !== action.payload.petID);
      return { ...state, favorites, active: false, favoriteActionQuery: null, error: action.error };
    }
    case types.REMOVE_FAVORITE_REQUEST: {
      let favorites = state.favorites;
      console.log('favorites: ', favorites);
      console.log('action.payload: ', action.payload.petID);
      console.log('x.petId: ');
      favorites.forEach(x => console.log(x.petID));
      console.log('now after the if statement');
      if (favorites.some(x => x.petID === action.payload.petID)) {
        console.log('got here');
        console.log('got here');
        console.log('got here');
        console.log('got here');
        console.log('got here');
        favorites = favorites.filter(x => x.petID !== action.payload.petID);
      }
      console.log('favorites: ', favorites);
      console.log('action.payload.petID: ', action.payload.petID);
      console.log('x.petId: ');
      favorites.forEach(x => console.log(x.petID));
      return {
        ...state,
        favorites,
        active: true,
        favoriteActionQuery: action.payload,
        error: false,
      };
    }
    case types.REMOVE_FAVORITE_SUCCESS: {
      return { ...state, active: false, favoriteActionQuery: null };
    }
    case types.REMOVE_FAVORITE_ERROR: {
      let favorites = state.favorites;
      if (!favorites.includes(x => x.petID === action.payload.petID)) {
        favorites = favorites.concat(action.payload);
      }
      return {
        ...state,
        favorites,
        active: true,
        favoriteActionQuery: action.payload,
        error: false,
      };
    }
    default:
      return state;
  }
};
