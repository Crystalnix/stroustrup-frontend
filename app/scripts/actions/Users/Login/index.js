// @flow
import { REQUEST_LOGIN, RECEIVE_LOGIN } from '../constants/ActionTypes'
import type {
  Action,
  Sign,
  SignAction,
} from '../../types'

export function requestLogin(requestData: Sign): SignAction {
  return {
    type: REQUEST_LOGIN,
    requestData,
  }
}

export function receiveLogin(): Action {
  return {
    type: RECEIVE_LOGIN,
  }
}
