import { combineReducers } from 'redux'
import get from './Get'
import put from './Put'
import take from './Take'
import shelf from './Shelf'

const bookReducer = combineReducers({
  get,
  put,
  take,
  shelf,
})

export default bookReducer