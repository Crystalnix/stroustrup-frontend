import { reducer as formReduser } from 'redux-form'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import book from './Book/index'
import bookshelf from './bookshelf'
import register from './User/register'
import login from './User/login'
import user from './User/index'
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
