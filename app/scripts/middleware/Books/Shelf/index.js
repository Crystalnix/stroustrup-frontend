import axios from 'axios'
import { put } from 'redux-saga/effects'
import API from '../../../constants/API'
import config from '../../../helpers/requestHeader'
import { receiveBookShelf } from '../../../actions/Books/Shelf'

export function* bookShelfSaga(action) {
  try {
    const result = yield axios.get(`${API.BOOK}?props=title%2Cauthor%2Cimage&sortBy=created%20desc`, config(action.data.token))
    if (result.status === 200) {
      const books = result.data.map(item => ({
        id: item.objectId,
        title: item.title,
        author: item.author,
        image: item.image,
      }))
      yield put(receiveBookShelf({ books }))
    } else {
      console.error(result.status, ': ', result.statusText)
    }
  } catch (error) {
    console.error(error.message)
  }
  return 0
}