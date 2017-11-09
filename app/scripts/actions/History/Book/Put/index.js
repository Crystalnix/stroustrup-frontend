import {
  REQUEST_HISTORY_BOOK_PUT,
  RECEIVE_HISTORY_BOOK_PUT,
} from '../../../../constants/ActionTypes'

export function requestHistoryBookPut(requestData) {
  return {
    type: REQUEST_HISTORY_BOOK_PUT,
    requestData,
  }
}

export function receiveHistoryBookPut() {
  return {
    type: RECEIVE_HISTORY_BOOK_PUT,
  }
}
