import React from 'react'
import { Route, Redirect } from 'react-router'
import App from '../components/App'
import Register from '../components/Body/Register/index'
import Login from '../components/Body/Login/index'
import Bookshelf from '../components/Body/Shelf'
import BookPage from '../components/Body/Book'
import Profile from '../components/Body/Profile'
import AddBook from '../components/Body/AddBook'
import History from '../components/Body/History'
import { userIsAuthenticated, userIsNotAuthenticated } from './auth'

const routes = (
  <div>
    <Redirect from="/" to="/book" />
    <Route path="/" component={App} redirect>
      <Route path="register" component={userIsNotAuthenticated(Register)} />
      <Route path="login" component={userIsNotAuthenticated(Login)} />
      <Route path="book" component={userIsAuthenticated(Bookshelf)} />
      <Route path="book/add" component={userIsAuthenticated(AddBook)} />
      <Route path="book/:id" component={userIsAuthenticated(BookPage)} />
      <Route path="user/:id" component={userIsAuthenticated(Profile)} />
      <Route path="history" component={userIsAuthenticated(History)} />
    </Route>
  </div>
)

export default routes
