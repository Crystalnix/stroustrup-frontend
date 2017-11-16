import { REQUEST_REGISTER, RECEIVE_REGISTER } from '../../../constants/ActionTypes'

const initialState = {
  isFetching: false,
  loaded: false,
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_REGISTER:
    return {
      isFetching: true,
      loaded: false,
    }
  case RECEIVE_REGISTER:
    return {
      isFetching: false,
      loaded: true,
    }
  default:
    return state
  }
}

export default registerReducer
