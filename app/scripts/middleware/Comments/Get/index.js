export function* commentsSaga(action) {
  try {
    const result = yield axios.get(`${API.COMMENTS}?where=book_id%3D${action.id}&sortBy=post_date%20desc`, config(action.data.token))
    const comments = result.data.map(item => ({
      id: item.objectId,
      ownerId: item.ownerId,
      text: item.text,
      username: item.username,
      date: item.post_date,
    }))
    yield put(receiveComments(comments))
  } catch (error) {
    return error.message
  }
  return 0
}
