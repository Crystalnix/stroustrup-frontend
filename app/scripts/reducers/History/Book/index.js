import { combineReducers } from 'redux'
import get from './Get'
import put from './Put'
import take from './Take'

const bookReducer = combineReducers({
  get,
  put,
  take,
})

export default bookReducer