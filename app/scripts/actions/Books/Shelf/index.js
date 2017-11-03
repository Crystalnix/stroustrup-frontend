import {
  REQUEST_BOOK_SHELF,
  RECEIVE_BOOK_SHELF
} from '../../../constants/ActionTypes'

export function requestBookShelf(token) {
  return {
    type: REQUEST_BOOK_SHELF,
    token,
  }
}


export function receiveBookShelf(books) {
  return {
    type: RECEIVE_BOOK_SHELF,
    books,
  }
}
