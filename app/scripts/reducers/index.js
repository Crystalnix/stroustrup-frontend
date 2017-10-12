import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import book from './book'
import bookshelf from './bookshelf'

//?!!?!!!?!??!?!??!!???!?!?!!!!?!?!?!?!?!?!?!?!?
export const reducers = combineReducers({
  routing: routerReducer,
  bookshelf,
  book
})

export default reducers
