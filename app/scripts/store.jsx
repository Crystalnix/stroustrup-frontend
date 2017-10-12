import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers/index'

const storeConfig = preloadedState => {
  const sagaMiddleware = createSagaMiddleware()
  let store
  if (preloadedState) {
    store = createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  } else {
    store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  }
  store.runSaga = sagaMiddleware.run
  store.close = () => {store.dispatch(END)}
  return store
}



export default storeConfig
