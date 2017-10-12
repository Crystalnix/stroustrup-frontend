import React from 'react'
import { Route } from 'react-router'
import Bookshelf from './components/Bookshelf'
import Book from './components/Book'

const routes = (
  <div>
    <Route path="/" component={Bookshelf} />
    <Route path="/book" component={Bookshelf} />
    <Route path="/book/:id" component={Book} />
  </div>
)

export default routes
