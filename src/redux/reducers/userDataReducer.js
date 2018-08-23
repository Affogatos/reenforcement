import * as types from '../constants/userDataConstants.js';

const initialState = {
  uuid: null,
  name: null,
  favorites: null,
  age: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_USER_DATA:
      const { name, uuid, favorites, age } = action.payload;
      return { name, uuid, favorites, age };
    case types.CLEAR_USER_DATA:
      return initialState;
    default:
      return state;
  }
};
