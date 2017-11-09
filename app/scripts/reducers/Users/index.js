import { combineReducers } from 'redux'
import get from './Get'
import login from './Login'
import register from './Register'

const usersReducer = combineReducers({
  get,
  login,
  register,
})

export default usersReducer
