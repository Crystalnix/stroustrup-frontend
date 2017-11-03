import {
  REQUEST_BOOK_ISBN,
  RECEIVE_BOOK_ISBN,
  REMOVE_BOOK_ISBN,
} from '../../../constants/ActionTypes'

export function requestBookIsbn(isbn) {
  return {
    type: REQUEST_BOOK_ISBN,
    isbn,
  }
}

export function receiveBookIsbn(book) {
  return {
    type: RECEIVE_BOOK_ISBN,
    book,
  }
}

export function removeBookIsbn() {
  return {
    type: REMOVE_BOOK_ISBN,
  }
}