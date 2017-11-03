import { all, takeEvery } from 'redux-saga/effects'
import * as sagas from './sagas'
import * as types from '../constants/ActionTypes'

export default function* rootSaga() {
  yield all([
    takeEvery(types.REQUEST_LOGIN, sagas.receiveLoginSaga),
    takeEvery(types.REQUEST_BOOK_SHELF, sagas.receiveBookShelfSaga),
    takeEvery(types.REQUEST_BOOK, sagas.receiveBookSaga),
    takeEvery(types.REQUEST_REGISTER, sagas.receiveRegisterSaga),
    takeEvery(types.REQUEST_BOOK_ADD, sagas.receiveBookAddSaga),
    takeEvery(types.REQUEST_BOOK_ISBN, sagas.receiveBookIsbnSaga),
  ])
}
