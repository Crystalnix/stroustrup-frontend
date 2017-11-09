import {
  REQUEST_HISTORY_USER_GET,
  RECEIVE_HISTORY_USER_GET,
} from '../../../constants/ActionTypes'

export function requestHistoryUserGet(requestData) {
  return {
    type: REQUEST_HISTORY_USER_GET,
    requestData,
  }
}

export function receiveHistoryUserGet(receiveData) {
  return {
    type: RECEIVE_HISTORY_USER_GET,
    receiveData,
  }
}
