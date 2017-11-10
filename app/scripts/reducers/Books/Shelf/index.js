import {
  REQUEST_BOOK_SHELF,
  RECEIVE_BOOK_SHELF,
} from '../../../constants/ActionTypes'

const initialState = {
  books: [],
  isFetching: false,
}

const shelfReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BOOK_SHELF:
    return {
      ...state,
      isFetching: true,
    }
    case RECEIVE_BOOK_SHELF:
    return {
      ...action.data,
      isFetching: false,
    }
  default:
    return state
  }
}

export default shelfReducer
