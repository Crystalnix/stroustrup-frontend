// @flow
import type { BookshelfType } from '../types'

const initialState: BookshelfType = {
  books: [],
  isFetching: false,
}

const bookshelfReducer = (state: BookshelfType = initialState, action: any): BookshelfType => {
  switch (action.type) {
  case 'REQUEST_BOOKSHELF':
    return {
      ...state,
      isFetching: true,
    }
  case 'RECEIVE_BOOKSHELF':
    return {
      books: action.books,
      isFetching: false,
    }
  default:
    return state
  }
}

export default bookshelfReducer
