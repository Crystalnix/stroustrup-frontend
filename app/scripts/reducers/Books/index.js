import { combineReducers } from 'redux'
import add from './Add'
import get from './Get'
import isbn from './Isbn'
import shelf from './Shelf'
import take from './Take'
import put from './Put'

const booksReducer = combineReducers({
  add,
  get,
  isbn,
  shelf,
  take,
  put,
})

export default booksReducer