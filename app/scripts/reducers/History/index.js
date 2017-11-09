import { combineReducers } from 'redux'
import book from './Book'
import user from './User'

const historyReducer = combineReducers({
  book,
  user,
})

export default historyReducer