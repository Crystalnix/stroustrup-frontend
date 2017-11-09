import { reducer as formReduser } from 'redux-form'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import books from './Books'
import comments from './Comments'
import history from './History'
import users from './Users'
import ui from './UI'
//?!!?!!!?!??!?!??!!???!?!?!!!!?!?!?!?!?!?!?!?!?
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReduser,
  books,
  comments,
  history,
  users,
  ui,
})

export default reducers
