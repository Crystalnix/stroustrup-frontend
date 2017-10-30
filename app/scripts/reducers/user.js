// @flow
import { SET_USER, DELETE_USER } from '../constants/ActionTypes'
import type { UserType } from '../types'

const emptyUser = {
  token: '',
  name: '',
  email: '',
  role: '',
  isAuth: false,
}

const initialState: UserType = (() => {
  const store = localStorage.getItem('user')
  if (typeof store === 'string') {
    return {
      ...(JSON.parse(store)),
      isAuth: true,
    }
  }
  return emptyUser
})()

const userReducer = (state: UserType = initialState, action: any) => {
  switch (action.type) {
  case SET_USER:
    return {
      name: action.name,
      email: action.email,
      token: action.token,
      role: action.role,
      isAuth: action.isAuth,
    }
  case DELETE_USER:
    return emptyUser
  default:
    return state
  }
}

export default userReducer
