import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
} from '../../../constants/ActionTypes'

export function requestComments(data) {
  return {
    type: REQUEST_COMMENTS,
    data,
  }
}

export function receiveComments(data) {
  return {
    type: RECEIVE_COMMENTS,
    data,
  }
}
