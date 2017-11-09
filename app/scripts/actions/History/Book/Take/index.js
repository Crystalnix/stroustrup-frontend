import {
  REQUEST_HISTORY_BOOK_TAKE,
  RECEIVE_HISTORY_BOOK_TAKE,
} from '../../../../constants/ActionTypes'

export function requestHistoryBookTake(requestData) {
  return {
    type: REQUEST_HISTORY_BOOK_TAKE,
    requestData,
  }
}

export function receiveHistoryBookTake() {
  return {
    type: RECEIVE_HISTORY_BOOK_TAKE,
  }
}
