// @flow
import {
  REQUEST_BOOK,
  RECEIVE_BOOK,
  REQUEST_BOOK_SET_OWNER,
  RECEIVE_BOOK_SET_OWNER,
} from '../../../constants/ActionTypes'
import type { BookReducer } from './types'

const initialState: BookReducer = {
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
  user: null,
  isFetching: false,
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
      ...action.data,
      isFetching: false,
    }
  default:
    return state
  }
}

export default getReducer
