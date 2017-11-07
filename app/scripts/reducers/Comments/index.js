import { combineReducers } from 'redux'
import add from './Add'
import get from './Get'

const commentsReducer = combineReducers({
  add,
  get,
})

export default commentsReducer