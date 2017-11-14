// @flow
import {
  REQUEST_BOOK,
  RECEIVE_BOOK,
  REMOVE_BOOK,
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
  case REMOVE_BOOK:
    return initialState
  default:
    return state
  }
}

export default getReducer
