import {
  REQUEST_BOOK_ISBN,
  RECEIVE_BOOK_ISBN,
  REMOVE_BOOK_ISBN,
} from '../../../constants/ActionTypes'
// import type { BookReducer } from './types'

const initialState = {
  isbn: '',
  title: '',
  subtitle: '',
  author: '',
  image: '',
  publisher: '',
  date: '',
  count: '',
  description: '',
  isFetching: false,
}

const isbnReducer = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_BOOK_ISBN:
    return {
      ...state,
      isFetching: true,
    }
  case RECEIVE_BOOK_ISBN:
    return {
      ...action.book,
      isFetching: false,
    }
  case REMOVE_BOOK_ISBN:
    return initialState
  default:
    return state
  }
}

export default isbnReducer
