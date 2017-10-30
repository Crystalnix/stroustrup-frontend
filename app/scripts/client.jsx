
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import storeConfig from './store'
import routes from './routes'
import rootSaga from './middleware/sagaRoot'
import '../style.css'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = storeConfig(preloadedState)
const history = syncHistoryWithStore(browserHistory, store)
store.runSaga(rootSaga)
render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root'),
)
