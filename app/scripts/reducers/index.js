import { reducer as formReduser } from 'redux-form'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import books from './Books'
import comments from './Comments'
import history from './History'
import register from './User/register'
import login from './User/login'
import user from './User/index'
import drawer from './drawer'
import description from './description'
//?!!?!!!?!??!?!??!!???!?!?!!!!?!?!?!?!?!?!?!?!?
export const reducers = combineReducers({
  routing: routerReducer,
  books,
  comments,
  history,
  register,
  login,
  user,
  description,
  drawer,
  form: formReduser,
})

export default reducers
