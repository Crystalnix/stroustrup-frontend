import { reducer as formReduser } from 'redux-form'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import book from './book'
import bookshelf from './bookshelf'
import register from './register'
import login from './login'
import user from './user'
import drawer from './drawer'
//?!!?!!!?!??!?!??!!???!?!?!!!!?!?!?!?!?!?!?!?!?
export const reducers = combineReducers({
  routing: routerReducer,
  bookshelf,
  book,
  register,
  login,
  user,
  drawer,
  form: formReduser,
})

export default reducers
