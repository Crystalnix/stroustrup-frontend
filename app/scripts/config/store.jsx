import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers/index'

const storeConfig = () => {
  const sagaMiddleware = createSagaMiddleware()
  let store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  store.runSaga = sagaMiddleware.run
  store.close = () => {store.dispatch(END)}
  return store
}

export default storeConfig
