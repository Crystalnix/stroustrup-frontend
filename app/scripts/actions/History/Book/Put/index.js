import {
  REQUEST_HISTORY_BOOK_PUT,
  RECEIVE_HISTORY_BOOK_PUT,
} from '../../../../constants/ActionTypes'

export function requestHistoryBookPut(data) {
  return {
    type: REQUEST_HISTORY_BOOK_PUT,
    data,
  }
}

export function receiveHistoryBookPut() {
  return {
    type: RECEIVE_HISTORY_BOOK_PUT,
  }
}
