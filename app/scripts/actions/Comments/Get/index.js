import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  REMOVE_COMMENTS,
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

export function removeComments() {
  return {
    type: REMOVE_COMMENTS,
  }
}
