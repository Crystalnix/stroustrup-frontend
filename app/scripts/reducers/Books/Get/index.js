import {
  REQUEST_BOOK,
  RECEIVE_BOOK,
  REQUEST_BOOK_SET_OWNER,
  RECEIVE_BOOK_SET_OWNER,
} from '../../../constants/ActionTypes'

const initialState: GetReducer = {
  id: '',
  isbn: '',
  title: '',
  subtitle: '',
  author: '',
  image: '',
  publisher: '',
  date: '',
  count: '',
  description: '',
  historyId: null,
  isFetching: false,
  isFetchingHistory: false,
}

const getReducer = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_BOOK:
    return {
      ...state,
      isFetching: true,
    }
    case RECEIVE_BOOK:
    return {
      ...state,
      ...action.book,
      isFetching: false,
    }
  case REQUEST_BOOK_SET_OWNER:
    return {
      ...state,
      isFetchingHistory: true,
    }
  case RECEIVE_BOOK_SET_OWNER:
    return {
      ...state,
      ...action.receiveData,
      isFetchingHistory: false,
    }
  default:
    return state
  }
}

export default getReducer
