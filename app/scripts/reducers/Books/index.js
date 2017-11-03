import { combineReducers } from 'redux'
import add from './Add'
import get from './Get'
import isbn from './Isbn'
import shelf from './Shelf'

const booksReducer = combineReducers({
  add,
  get,
  isbn,
  shelf,
})

export default booksReducer