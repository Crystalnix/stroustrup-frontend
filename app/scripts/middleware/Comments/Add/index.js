export function* commentAddSaga(action) {
  try {
    const result = yield axios.post(`${API.COMMENTS}`, action.comment, config(action.data.token))
    if (result) {
      yield put(receiveCommentAdd())
      yield put(requestComments(action.token, action.comment.book_id))
    }
  } catch (error) {
    return error.message
  }
  return 0
}