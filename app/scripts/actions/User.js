// @flow
import { DELETE_USER, SET_USER } from '../constants/ActionTypes'

export function setUser(id: string, token: string, name: string, email: string, role: string, isAuth: boolean): { type: string, token: ?string, name: string, email: string, role: string } {
  return {
    type: SET_USER,
    id,
    token,
    name,
    email,
    role,
    isAuth,
  }
}

export function deleteUser(): {type: string} {
  localStorage.removeItem('user')
  return {
    type: DELETE_USER,
  }
}
