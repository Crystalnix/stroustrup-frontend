import axios from 'axios'
import { put } from 'redux-saga/effects'
import API from '../../../constants/API'
import { receiveBookIsbn, removeBookIsbn } from '../../../actions/Books/Isbn'

export function* bookIsbnSaga(action) {
  const url = `${API.ISBN}${action.data.isbn}`
  const response = yield axios({
    method: 'GET',
    url,
  })
  if (response.data.totalItems !== 0) {
    const result = response.data.items[0].volumeInfo
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
  } else {
    const receiveData = {
      isbn: 'none',
      title: '',
      subtitle: '',
      author: '',
      image: '',
      publisher: '',
      date: '',
      count: '',
      description: '',
    }
    yield put(receiveBookIsbn(receiveData))
  }
  return 0
}
