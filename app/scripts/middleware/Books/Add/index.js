// @flow

export function* bookAddSaga(action) {
  try {
    let book = {
      ...action.book,
      page_count: `${+action.book.count}`,
      published_date: action.book.date,
    }
    delete book.date
    delete book.count
    const result = yield axios.post(`${API.BOOK}`, book, config(action.data.token))
    yield put(receiveBookAdd(result.data.objectId))
  } catch (error) {
    return error.message
  }
  return 0
}
