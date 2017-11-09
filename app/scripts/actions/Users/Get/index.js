// @flow
import { DELETE_USER, SET_USER } from '../../../constants/ActionTypes'
import type {
  Action,
  User,
  UserAction,
} from '../../types'

export function setUser(requestData: User): UserAction {
  return {
    type: SET_USER,
    requestData,
  }
}

export function deleteUser(): Action {
  localStorage.removeItem('user')
  return {
    type: DELETE_USER,
  }
}
