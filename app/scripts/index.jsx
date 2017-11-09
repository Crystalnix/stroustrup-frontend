
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import storeConfig from './config/store'
import routes from './config/routes'
import rootSaga from './middleware'
import '../style.css'

const store = storeConfig()
const history = syncHistoryWithStore(browserHistory, store)
store.runSaga(rootSaga)
render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root'),
)
