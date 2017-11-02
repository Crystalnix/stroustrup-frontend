// @flow
import {
  REQUEST_BOOK,
  RECEIVE_BOOK,
  REQUEST_ADD_BOOK,
  RECEIVE_ADD_BOOK,
  REQUEST_BOOK_ISBN,
  RECEIVE_BOOK_ISBN,
} from '../../constants/ActionTypes'
import type { BookReducerType } from './types'

const initialState: BookReducerType = {
  id: '',
  title: '',
  author: '',
  summary: '',
  notes: '',
  publisher: '',
  isFetching: false,
  isbnIsFetching: true,
}

const bookReducer = (state: BookReducerType = initialState, action: any): BookReducerType => {
  switch (action.type) {
  case REQUEST_ADD_BOOK:
    return {
      ...state,
      isFetching: true,
    }
  case RECEIVE_ADD_BOOK:
    return {
      ...state,
      isFetching: false,
      isbnIsFetching: true,
    }
  case REQUEST_BOOK:
    return {
      ...state,
      isFetching: true,
    }
  case RECEIVE_BOOK:
    return {
      id: action.book.objectId || '',
      title: action.book.title || '',
      author: action.book.author || '',
      summary: action.book.summary || '',
      notes: action.book.notes || '',
      publisher: action.book.publisher || '',
      isFetching: false,
      isbnIsFetching: true,
    }
  case REQUEST_BOOK_ISBN:
    return {
      ...state,
      isFetching: true,
    }
  case RECEIVE_BOOK_ISBN:
    return {
      ...state,
      isFetching: false,
      isbnIsFetching: false,
    }
  default:
    return state
  }
}

export default bookReducer
