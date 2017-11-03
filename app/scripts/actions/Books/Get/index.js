import {
  REQUEST_BOOK,
  RECEIVE_BOOK,
} from '../../../constants/ActionTypes'

export function requestBook(id, token) {
  return {
    type: REQUEST_BOOK,
    id,
    token,
  }
}

export function receiveBook(book) {
  return {
    type: RECEIVE_BOOK,
    book,
  }
}
