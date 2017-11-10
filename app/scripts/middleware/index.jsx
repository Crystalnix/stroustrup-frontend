import { all, takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'
import { historyBookTakeSaga } from './History/Book/Take'
import { historyBookPutSaga } from './History/Book/Put'
import { historyBookGetSaga } from './History/Book/Get'
import { historyUserGetSaga } from './History/User'
import { loginSaga } from './Users/Login'
import { registerSaga } from './Users/Register'
import { bookShelfSaga } from './Books/Shelf'
import { bookSaga } from './Books/Get'
import { bookAddSaga } from './Books/Add'
import { commentsSaga } from './Comments/Get'
import { commentAddSaga } from './Comments/Add'
import { bookIsbnSaga } from './Books/Isbn'

export default function* rootSaga() {
  yield all([
    takeEvery(types.REQUEST_LOGIN, loginSaga),
    takeEvery(types.REQUEST_REGISTER, registerSaga),
    takeEvery(types.REQUEST_BOOK_SHELF, bookShelfSaga),
    takeEvery(types.REQUEST_HISTORY_BOOK_TAKE, historyBookTakeSaga),
    takeEvery(types.REQUEST_HISTORY_BOOK_PUT, historyBookPutSaga),
    takeEvery(types.REQUEST_HISTORY_BOOK_GET, historyBookGetSaga),
    takeEvery(types.REQUEST_HISTORY_USER_GET, historyUserGetSaga),
    takeEvery(types.REQUEST_BOOK, bookSaga),
    takeEvery(types.REQUEST_BOOK_ADD, bookAddSaga),
    takeEvery(types.REQUEST_BOOK_ISBN, bookIsbnSaga),
    takeEvery(types.REQUEST_COMMENT_ADD, commentAddSaga),
    takeEvery(types.REQUEST_COMMENTS, commentsSaga),
  ])
}
