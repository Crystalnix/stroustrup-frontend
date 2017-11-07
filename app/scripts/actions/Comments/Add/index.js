import {
  REQUEST_COMMENT_ADD,
  RECEIVE_COMMENT_ADD,
  COMMENTS_REFRESH,
} from '../../../constants/ActionTypes'

export function requestCommentAdd(comment, token) {
  return {
    type: REQUEST_COMMENT_ADD,
    comment,
    token,
  }
}

export function receiveCommentAdd() {
  return {
    type: RECEIVE_COMMENT_ADD,
  }
}

export function commentsRefresh() {
  return {
    type: COMMENTS_REFRESH,
  }
}
