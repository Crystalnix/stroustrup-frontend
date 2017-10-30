// @flow
import { REQUEST_LOGIN, RECEIVE_LOGIN } from '../constants/ActionTypes'
import type { SignFormActionType } from '../types'

export function requestLogin(email: string, password: string): SignFormActionType {
  return {
    type: REQUEST_LOGIN,
    email,
    password,
  }
}

export function receiveLogin(): { type: string, } {
  return {
    type: RECEIVE_LOGIN,
  }
}
