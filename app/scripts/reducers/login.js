// @flow
import { REQUEST_LOGIN, RECEIVE_LOGIN } from '../constants/ActionTypes'
import type { LoginFormReducerType } from '../types'

const initialState: LoginFormReducerType = {
  email: '',
  password: '',
  loginIsFetching: false,
}

const loginReducer = (state: LoginFormReducerType = initialState, action: any) => {
  switch (action.type) {
  case REQUEST_LOGIN:
    return {
      ...state,
      loginIsFetching: true,
    }
  case RECEIVE_LOGIN:
    return {
      ...state,
      loginIsFetching: false,
    }
  default:
    return state
  }
}

export default loginReducer
