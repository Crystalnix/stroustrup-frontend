import axios from 'axios'
import { put } from 'redux-saga/effects'
import API from '../../../constants/API'
import { receiveBookIsbn } from '../../../actions/Books/Isbn'

export function* bookIsbnSaga(action) {
  const url = `${API.ISBN}${action.data.isbn}`
  const result = (yield axios({
    method: 'GET',
    url,
  })).data.items[0].volumeInfo
  const receiveData = {
    isbn: action.data.isbn,
    title: result.title,
    subtitle: result.subtitle,
    author: result.authors[0],
    image: result.imageLinks.thumbnail,
    publisher: result.publisher,
    date: result.publishedDate,
    count: result.pageCount,
    description: result.description,
  }
  yield put(receiveBookIsbn(receiveData))
  return 0
}
