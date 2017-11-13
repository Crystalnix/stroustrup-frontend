import {
  REQUEST_BOOK_ISBN,
  RECEIVE_BOOK_ISBN,
  REMOVE_BOOK_ISBN,
} from '../../../constants/ActionTypes'

export function requestBookIsbn(data) {
  return {
    type: REQUEST_BOOK_ISBN,
    data,
  }
}

export function receiveBookIsbn(data) {
  return {
    type: RECEIVE_BOOK_ISBN,
    data,
  }
}

export function removeBookIsbn(): Action {
  return {
    type: REMOVE_BOOK_ISBN,
  }
}
