// @flow
import { REQUEST_LOGIN, RECEIVE_LOGIN } from '../../../constants/ActionTypes'
import type { Fetch } from '../../types'
import type {
  Action,
  SignAction,
} from '../../../actions/types'

const initialState: Fetch = {
  isFetching: false,
}

const loginReducer = (state: Fetch = initialState, action: Action | SignAction) => {
  switch (action.type) {
  case REQUEST_LOGIN:
    return {
      isFetching: true,
    }
  case RECEIVE_LOGIN:
    return {
      isFetching: false,
    }
  default:
    return state
  }
}

export default loginReducer
