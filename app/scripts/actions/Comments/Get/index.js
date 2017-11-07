import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
} from '../../../constants/ActionTypes'

export function requestComments(token, id) {
  return {
    type: REQUEST_COMMENTS,
    token,
    id,
  }
}

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}
