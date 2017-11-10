export function* bookIsbnSaga(action) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${action.isbn}`
  const result = (yield axios({
    method: 'GET',
    url,
  })).data.items[0].volumeInfo
  yield put(receiveBookIsbn({
    isbn: action.isbn,
    title: result.title,
    subtitle: result.subtitle,
    author: result.authors[0],
    image: result.imageLinks.thumbnail,
    publisher: result.publisher,
    date: result.publishedDate,
    count: result.pageCount,
    description: result.description,
  }))
  return 0
}
