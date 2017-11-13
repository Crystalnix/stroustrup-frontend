import {
  REQUEST_HISTORY_USER_GET,
  RECEIVE_HISTORY_USER_GET,
} from '../../../constants/ActionTypes'

const initialState = {
  books: [],
  isFetching: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HISTORY_USER_GET:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_HISTORY_USER_GET:
      return {
        ...state,
        ...action.data,
        isFetching: false,
      }
    default:
      return state
  }
}

export default userReducer
