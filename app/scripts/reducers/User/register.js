// @flow
import { REQUEST_REGISTER, RECEIVE_REGISTER } from '../../constants/ActionTypes'
import type { RegisterFormReducerType } from '../../types'

const initialState: RegisterFormReducerType = {
  registerIsFetching: false,
}

const registerReducer = (state: RegisterFormReducerType = initialState, action: any) => {
  switch (action.type) {
  case REQUEST_REGISTER:
    return {
      ...state,
      registerIsFetching: true,
    }
  case RECEIVE_REGISTER:
    return {
      ...state,
      registerIsFetching: false,
    }
  default:
    return state
  }
}

export default registerReducer
