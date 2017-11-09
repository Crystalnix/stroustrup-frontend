import {
  REQUEST_HISTORY_BOOK_TAKE,
  RECEIVE_HISTORY_BOOK_TAKE,
} from '../../../../constants/ActionTypes'

const initialState = {
  isFetching: false,
}

const takeReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HISTORY_BOOK_TAKE:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_HISTORY_BOOK_TAKE:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

export default takeReducer
