import React from 'react'
import { Route } from 'react-router'
import App from '../components/App'
import Register from '../components/Body/Register/index'
import Login from '../components/Body/Login/index'
import Bookshelf from '../components/Body/Shelf'
import BookPage from '../components/Body/Book'
import Profile from '../components/Profile'
import AddBook from '../components/AddBook/index'
import User from '../components/User'
import { userIsAuthenticated, userIsNotAuthenticated } from './auth'

const routes = (
  <Route path="/" component={App}>
    <Route path="register" component={userIsNotAuthenticated(Register)} />
    <Route path="login" component={userIsNotAuthenticated(Login)} />
    <Route path="profile" component={userIsAuthenticated(Profile)} />
    <Route path="book" component={userIsAuthenticated(Bookshelf)} />
    <Route path="book/add" component={userIsAuthenticated(AddBook)} />
    <Route path="book/:id" component={userIsAuthenticated(BookPage)} />
    <Route path="user/:id" component={userIsAuthenticated(User)} />
  </Route>
)

export default routes
