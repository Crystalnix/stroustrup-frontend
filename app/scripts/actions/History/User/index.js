import {
  REQUEST_HISTORY_USER_GET,
  RECEIVE_HISTORY_USER_GET,
} from '../../../constants/ActionTypes'

export function requestHistoryUserGet(data) {
  return {
    type: REQUEST_HISTORY_USER_GET,
    data,
  }
}

export function receiveHistoryUserGet(data) {
  return {
    type: RECEIVE_HISTORY_USER_GET,
    data,
  }
}
