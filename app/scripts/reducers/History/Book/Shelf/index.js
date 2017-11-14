import {
  REQUEST_HISTORY_BOOK_SHELF,
  RECEIVE_HISTORY_BOOK_SHELF,
} from '../../../../constants/ActionTypes'

const initialState = {
  items: [],
  isFetching: false,
}

const shelfReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HISTORY_BOOK_SHELF:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_HISTORY_BOOK_SHELF:
      return {
        ...state,
        ...action.data,
        isFetching: false,
      }
    default:
      return state
  }
}

export default shelfReducer
