import {
  REQUEST_HISTORY_BOOK_GET,
  RECEIVE_HISTORY_BOOK_GET,
} from '../../../../constants/ActionTypes'

export function requestHistoryBookGet(data) {
  return {
    type: REQUEST_HISTORY_BOOK_GET,
    data,
  }
}

export function receiveHistoryBookGet(receiveData) {
  return {
    type: RECEIVE_HISTORY_BOOK_GET,
    receiveData,
  }
}
