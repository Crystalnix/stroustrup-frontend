// @flow
import axios from 'axios'
import { put } from 'redux-saga/effects'
import API from '../../../constants/API'
import config from '../../../helpers/requestHeader'
import { receiveBook } from '../../../actions/Books/Get'
import type { Book } from '../../../config/types'

export function* bookSaga(action) {
  try {
    const result = yield axios.get(`${API.BOOK}/${action.data.id}`, config(action.data.token))
    let userData = null
    if (result.data.user_id) {
      const resultData = yield axios.get(`${API.USERS}/${result.data.user_id}?props=name`)
      userData = {
        id: resultData.data.objectId,
        name: resultData.data.name,
      }
    }
    const book: Book = {
      id: result.data.objectId,
      isbn: result.data.isbn,
      title: result.data.title,
      subtitle: result.data.subtitle,
      author: result.data.author,
      image: result.data.image,
      publisher: result.data.publisher,
      date: result.data.published_date,
      count: result.data.page_count,
      description: result.data.description,
      user: userData,
    }
    yield put(receiveBook(book))
  } catch (error) {
    console.error(error.message)
  }
  return 0
}