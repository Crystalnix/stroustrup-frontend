// @flow
import * as types from '../constants/ActionTypes'
import type { BookType } from '../types'

const initialState: BookType = {
  id: '',
  name: '',
  isFetching: false,
}

const bookReducer = (state: BookType = initialState, action: any): BookType => {
  switch (action.type) {
  case types.REQUEST_BOOK:
    return {
      ...state,
      isFetching: true,
    }
  case types.RECEIVE_BOOK:
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
