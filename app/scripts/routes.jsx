import React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import Register from './components/Register'
import Login from './components/Login'
import Bookshelf from './components/Bookshelf'
import BookPage from './components/BookPage'
import Profile from './components/Profile'
import AddBook from './components/AddBook'
import { userIsAuthenticated, userIsNotAuthenticated } from './auth'

const routes = (
  <Route path="/" component={App}>
    <Route path="register" component={userIsNotAuthenticated(Register)} />
    <Route path="login" component={userIsNotAuthenticated(Login)} />
    <Route path="profile" component={userIsAuthenticated(Profile)} />
    <Route path="book" component={userIsAuthenticated(Bookshelf)} />
    <Route path="book/add" component={userIsAuthenticated(AddBook)} />
    <Route path="book/:id" component={userIsAuthenticated(BookPage)} />
  </Route>
)

export default routes
