// @flow
import { DELETE_USER, SET_USER } from '../../../constants/ActionTypes'
import type {
  Action,
  UserAction,
} from '../../types'
import type {User} from "../../../config/types";

export function setUser(data: User): UserAction {
  return {
    type: SET_USER,
    data,
  }
}

export function deleteUser(): Action {
  localStorage.removeItem('user')
  return {
    type: DELETE_USER,
  }
}
