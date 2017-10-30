// @flow
import { REQUEST_REGISTER, RECEIVE_REGISTER } from '../constants/ActionTypes'
import type { SignFormActionType } from '../types'

export function requestRegister(email: string, password: string): SignFormActionType {
  return {
    type: REQUEST_REGISTER,
    email,
    password,
  }
}

export function recieveRegister(): { type: string, } {
  return {
    type: RECEIVE_REGISTER,
  }
}
