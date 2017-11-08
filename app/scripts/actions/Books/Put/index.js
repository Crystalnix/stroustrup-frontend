import {
  REQUEST_BOOK_PUT,
  RECEIVE_BOOK_PUT,
} from '../../../constants/ActionTypes'

export function requestBookPut(bookId, token) {
  return {
    type: REQUEST_BOOK_PUT,
    bookId,
    token,
  }
}

export function receiveBookPut() {
  return {
    type: RECEIVE_BOOK_PUT,
  }
}
