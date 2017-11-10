import {
  REQUEST_HISTORY_BOOK_TAKE,
  RECEIVE_HISTORY_BOOK_TAKE,
} from '../../../../constants/ActionTypes'

export function requestHistoryBookTake(data) {
  return {
    type: REQUEST_HISTORY_BOOK_TAKE,
    data,
  }
}

export function receiveHistoryBookTake() {
  return {
    type: RECEIVE_HISTORY_BOOK_TAKE,
  }
}
