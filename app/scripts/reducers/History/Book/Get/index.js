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
  loaded: false,
}

const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HISTORY_BOOK_GET:
      return {
        ...state,
        isFetching: true,
        loaded: false,
      }
    case RECEIVE_HISTORY_BOOK_GET:
      return {
        ...state,
        ...action.receiveData,
        isFetching: false,
        loaded: true,
      }
    default:
      return state
  }
}

export default getReducer
