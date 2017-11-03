import {
  REQUEST_BOOK_ADD,
  RECEIVE_BOOK_ADD,
} from '../../../constants/ActionTypes'

export function requestBookAdd(book, token) {
  return {
    type: REQUEST_BOOK_ADD,
    book,
    token,
  }
}

export function receiveBookAdd(id) {
  return {
    type: RECEIVE_BOOK_ADD,
    id,
  }
}
