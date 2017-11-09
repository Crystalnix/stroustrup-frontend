import {
  REQUEST_HISTORY_BOOK_PUT,
  RECEIVE_HISTORY_BOOK_PUT,
} from '../../../../constants/ActionTypes'

const initialState = {
  isFetching: false,
}

const putReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HISTORY_BOOK_PUT:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_HISTORY_BOOK_PUT:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

export default putReducer
