import axios from 'axios'
import { put } from 'redux-saga/effects'
import config from '../../../helpers/requestHeader'
import { receiveHistoryUserGet } from '../../../actions/History/User'
import API from '../../../constants/API'

export function* historyUserGetSaga(action) {
  try {
    const result = yield axios.get(`${API.HISTORY}?where=userId%3D${action.data.userId}&sortBy=created%20desc`, config(action.data.token))
    if (result) {
      if (result.data[0]) {
        let i = 0
        let books = []
        for (; i < result.data.length; i++) {
          const book = yield axios.get(`${API.BOOK}/${result.data[i].bookId}`)
          books[i] = {
            id: book.data.objectId,
            title: book.data.title,
            author: book.data.author,
            image: book.data.image,
            takeDate: result.data[i].takeDate,
            putDate: result.data[i].putDate || '',
          }
        }
        const receiveData = {
          books,
        }
        yield put(receiveHistoryUserGet(receiveData))
      }
    }
  } catch (error) {
    console.error(error.message)
  }
  return 0
}