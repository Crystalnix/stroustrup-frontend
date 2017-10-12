import 'babel-polyfill'
import Express from 'express'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import React from 'react'
import { match, Router } from 'react-router'

import storeConfig from './app/scripts/store'
import routes from './app/scripts/routes'
import rootSaga from './app/scripts/middleware/sagaRoot'
import Bookshelf from './app/scripts/components/Bookshelf'

let app = Express()
const PORT = 3000
app.use(Express.static('public'))
app.get('*', handleRender)




function handleRender(req, res) {
  let store = storeConfig()
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    const rootComponent = (
      <Provider store={store}>
        <Router {...renderProps} />
      </Provider>
    )
    store.runSaga(rootSaga).done.then(() => {
      const preloadedState = store.getState()
      try {
        res.status(200).send(renderFullPage(renderToString(rootComponent), preloadedState))
      } catch (error) {
        return error.message
      }
    }).catch((error) => {
      return error.message
    })
    renderToString(rootComponent)
    store.close()
  })
}




function renderFullPage(html, preloadedState) {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Straustrup Library</title>
      </head>
      <body>
        <div id="root">
          ${`<div>${html}</div>`}
        </div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}




app.listen(PORT, function() {
  console.log('http://localhost:', PORT)
})
