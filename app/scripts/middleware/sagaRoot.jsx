import { all, takeEvery } from 'redux-saga/effects'
import { receiveBookshelfSaga, receiveBookSaga } from './sagas'
import * as types from '../constants/ActionTypes'

export default function* rootSaga() {
  yield all([
    takeEvery(types.REQUEST_BOOKSHELF, receiveBookshelfSaga),
    takeEvery(types.REQUEST_BOOK, receiveBookSaga),
  ])
}
