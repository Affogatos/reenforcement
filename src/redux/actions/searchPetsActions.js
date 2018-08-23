import { put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import * as types from '../constants/searchPetsConstants.js';
import createQueryString from '../utils/createQueryString.js';
import parseAnimalData from '../utils/parseAnimalJSON.js';

export const searchPets = query => ({ type: types.SEARCH_PETS_REQUEST, payload: query });
export const getQuery = state => state.petSearch.query;

function* startPetSearch() {
  try {
    const query = yield select(getQuery);
    console.log('​function*startPetSearch -> query', query);
    console.log('​function*startPetSearch -> query', query);
    console.log('​function*startPetSearch -> query', query);
    console.log(createQueryString(query));
    const results = yield axios.get(createQueryString(query));
    const payload = parseAnimalData(results);
    yield put({ type: types.SEARCH_PETS_SUCCESS, payload });
  } catch (error) {
    yield put({ type: types.SEARCH_PETS_ERROR, error: error });
  }
}

export function* petSearchWatcher() {
  yield takeLatest(types.SEARCH_PETS_REQUEST, startPetSearch);
}
