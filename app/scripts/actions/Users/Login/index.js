// @flow
import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN
} from '../../../constants/ActionTypes'
import type { Sign } from '../../../config/types'
import type {
  Action,
  SignAction,
} from '../../types'

export function requestLogin(data: Sign): SignAction {
  return {
    type: REQUEST_LOGIN,
    data,
  }
}

export function receiveLogin(): Action {
  return {
    type: RECEIVE_LOGIN,
  }
}
