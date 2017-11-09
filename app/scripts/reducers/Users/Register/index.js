// @flow
import { REQUEST_REGISTER, RECEIVE_REGISTER } from '../../../constants/ActionTypes'
import type { Fetch } from '../../types'
import type {
  Action,
  SignAction,
} from '../../../actions/types'

const initialState: Fetch = {
  isFetching: false,
}

const registerReducer = (state: Fetch = initialState, action: Action | SignAction) => {
  switch (action.type) {
  case REQUEST_REGISTER:
    return {
      isFetching: true,
    }
  case RECEIVE_REGISTER:
    return {
      isFetching: false,
    }
  default:
    return state
  }
}

export default registerReducer
