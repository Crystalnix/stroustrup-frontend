import {
  REQUEST_COMMENT_ADD,
  RECEIVE_COMMENT_ADD,
  COMMENTS_REFRESH,
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
