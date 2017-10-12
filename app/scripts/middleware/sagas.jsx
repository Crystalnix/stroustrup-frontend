import axios from 'axios'
import { put } from 'redux-saga/effects'
import { receiveBookshelf } from '../actions/Bookshelf'
import { receiveBook } from '../actions/Book'

export function* receiveBookshelfSaga() {
  try {
    const result: any = yield axios.get('https://api.backendless.com/09B44768-E0F1-8BB6-FF0B-70F6E3BA4500/6695E1F0-8850-57ED-FFE6-227C75556200/data/book?props=name%2CobjectId&sortBy=name')
    yield put(receiveBookshelf(result.data))
  } catch (error) {
    return error.message
  }
  return 0
}

export function* receiveBookSaga(action) {
  try {
    const result = yield axios.get(`https://api.backendless.com/09B44768-E0F1-8BB6-FF0B-70F6E3BA4500/6695E1F0-8850-57ED-FFE6-227C75556200/data/book/${action.id}`)
    yield put(receiveBook(result.data))
  } catch (error) {
    return error.message
  }
  return 0
}
