import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './store/store'

import App from './App';
import DevTools from './containers/DevTools';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
    <DevTools />
  </Provider>,
  document.getElementById('root')
);
