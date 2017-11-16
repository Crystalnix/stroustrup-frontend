// @flow
import axios from 'axios'
import { put } from 'redux-saga/effects'
import API from '../../../constants/API'
import { receiveBookAdd } from '../../../actions/Books/Add'
import config from '../../../helpers/requestHeader'

export function* bookAddSaga(action) {
  try {
    let book = {
      ...action.data.book,
      page_count: `${+action.data.book.count}`,
      published_date: action.data.book.date,
    }
    delete book.date
    delete book.count
    const result = yield axios.post(`${API.BOOK}`, book, config(action.data.token))
    yield put(receiveBookAdd({ id: result.data.objectId }))
  } catch (error) {
    console.error(error.message)
  }
  return 0
}
