import { all, takeEvery } from 'redux-saga/effects'
import * as sagas from './sagas'
import * as types from '../constants/ActionTypes'

// const takeEvery = (pattern, saga, ...args) => fork(function* () {
//   while (true) {
//     const action = yield take(pattern)
//     yield fork(saga, ...args.concat(action))
//   }
// })

export default function* rootSaga() {
  yield all([
    takeEvery(types.REQUEST_LOGIN, sagas.receiveLoginSaga),
    takeEvery(types.REQUEST_BOOKSHELF, sagas.receiveBookshelfSaga),
    takeEvery(types.REQUEST_BOOK, sagas.receiveBookSaga),
    takeEvery(types.REQUEST_REGISTER, sagas.receiveRegisterSaga),
    takeEvery(types.REQUEST_ADD_BOOK, sagas.receiveAddBookSaga),
    takeEvery(types.REQUEST_BOOK_ISBN, sagas.receiveBookIsbnSaga),
  ])
}
