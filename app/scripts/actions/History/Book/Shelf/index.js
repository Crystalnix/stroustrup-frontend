import {
  REQUEST_HISTORY_BOOK_SHELF,
  RECEIVE_HISTORY_BOOK_SHELF,
} from '../../../../constants/ActionTypes'

export function requestHistoryBookShelf(data) {
  return {
    type: REQUEST_HISTORY_BOOK_SHELF,
    data,
  }
}

export function receiveHistoryBookShelf(data) {
  return {
    type: RECEIVE_HISTORY_BOOK_SHELF,
    data,
  }
}
