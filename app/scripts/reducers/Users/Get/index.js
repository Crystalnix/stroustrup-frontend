// @flow
import {
  SET_USER,
  DELETE_USER
} from '../../../constants/ActionTypes'
import type { User } from '../../../config/types'
import type {
  Action,
  UserAction,
} from '../../../actions/types'

const emptyUser: User = {
  id: '',
  token: '',
  name: '',
  email: '',
  role: '',
  isAuth: false,
}

const initialState: User = (() => {
  const store = localStorage.getItem('user')
  if (typeof store === 'string') {
    return {
      ...(JSON.parse(store)),
    }
  }
  return emptyUser
})()

const getReducer = (state: User = initialState, action: Action | UserAction) => {
  switch (action.type) {
  case SET_USER:
    return action.data
  case DELETE_USER:
    return emptyUser
  default:
    return state
  }
}

export default getReducer
