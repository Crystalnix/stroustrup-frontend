import {
  REQUEST_COMMENT_ADD,
  RECEIVE_COMMENT_ADD,
  REMOVE_COMMENT_ADD,
} from '../../../constants/ActionTypes'

export function requestCommentAdd(data) {
  return {
    type: REQUEST_COMMENT_ADD,
    data,
  }
}

export function receiveCommentAdd() {
  return {
    type: RECEIVE_COMMENT_ADD,
  }
}

export function removeCommentAdd() {
  return {
    type: REMOVE_COMMENT_ADD,
  }
}
