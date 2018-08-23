import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configure.js';
import App from './components/App.jsx';
// import './styles/styles.scss';

const store = configureStore();
const root = document.getElementById('app');
const RootJSX = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(RootJSX, root);
