// @flow
import {
  REQUEST_REGISTER,
  RECEIVE_REGISTER,
} from '../constants/ActionTypes'
import type {
  Action,
  Sign,
  SignAction,
} from '../../types'

export function requestRegister(requestData: Sign): SignAction {
  return {
    type: REQUEST_REGISTER,
    requestData,
  }
}

export function recieveRegister(): Action {
  return {
    type: RECEIVE_REGISTER,
  }
}
