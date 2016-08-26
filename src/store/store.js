import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import roommaideApp from '../reducers/index'

export default function configureStore(preloadedState){
  return createStore(
    roommaideApp,
    preloadedState,
    applyMiddleware(
      thunk
    )
  )
}
