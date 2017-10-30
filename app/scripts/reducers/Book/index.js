// @flow
import {
  REQUEST_BOOK,
  RECEIVE_BOOK,
  REQUEST_ADD_BOOK,
  RECEIVE_ADD_BOOK,
} from '../../constants/ActionTypes'
import type { BookReducerType } from './types'

const initialState: BookReducerType = {
  id: '',
  name: '',
  isFetching: false,
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
      id: action.book.objectId,
      name: action.book.name,
      isFetching: false,
    }
  case REQUEST_BOOK:
    return {
      ...state,
      isFetching: true,
    }
  case RECEIVE_BOOK:
    return {
      id: action.book.objectId,
      name: action.book.name,
      isFetching: false,
    }
  default:
    return state
  }
}

export default bookReducer
