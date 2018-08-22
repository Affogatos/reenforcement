import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import authenticationReducer from './reducers/authenticationReducer.js';
import userDataReducer from './reducers/userDataReducer.js';

import rootSaga from './saga/rootSaga.js';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    combineReducers({
      authentication: authenticationReducer,
      userData: userDataReducer,
    }),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);

  return store;
};
