import {
  REQUEST_HISTORY_BOOK_GET,
  RECEIVE_HISTORY_BOOK_GET,
} from '../../../../constants/ActionTypes'

const initialState = {
  id: '',
  bookId: '',
  user: {},
  takeDate: '',
  putDate: '',
  isFetching: false,
}

const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HISTORY_BOOK_GET:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_HISTORY_BOOK_GET:
      return {
        ...state,
        ...action.receiveData,
        isFetching: false,
      }
    default:
      return state
  }
}

export default getReducer
