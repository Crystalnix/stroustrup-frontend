// @flow
import {
  REQUEST_REGISTER,
  RECEIVE_REGISTER,
} from '../../../constants/ActionTypes'
import type { Sign } from '../../../config/types'
import type {
  Action,
  SignAction,
} from '../../types'

export function requestRegister(data: Sign): SignAction {
  return {
    type: REQUEST_REGISTER,
    data,
  }
}

export function receiveRegister(): Action {
  return {
    type: RECEIVE_REGISTER,
  }
}
