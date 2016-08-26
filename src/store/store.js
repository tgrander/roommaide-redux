import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import roommaideApp from '../reducers/index'
import DevTools from '../containers/DevTools';

export default function configureStore(preloadedState){
  return createStore(
    roommaideApp,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )


  )
}
