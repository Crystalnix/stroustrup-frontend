import axios from 'axios'
import { put } from 'redux-saga/effects'
import dateFormat from 'dateformat'
import { DATE_FORMAT } from '../../../../constants/index'
import config from '../../../../helpers/requestHeader'
import { receiveHistoryBookTake } from '../../../../actions/History/Book/Take'
import { receiveHistoryBookGet } from '../../../../actions/History/Book/Get'
import API from '../../../../constants/API'

export function* historyBookTakeSaga(action) {
  const requestData = {
    bookId: action.data.bookId,
    userId: action.data.user.id,
    takeDate: dateFormat(new Date(), DATE_FORMAT),
    putDate: null,
  }
  try {
    const result = yield axios.post(`${API.HISTORY}`, requestData, config(action.data.token))
    if (result) {
      const receiveData = {
        id: result.data.objectId,
        bookId: result.data.bookId,
        user: action.data.user,
        takeDate: result.data.takeDate,
        putDate: result.data.putDate,
      }
      yield put(receiveHistoryBookTake())
      yield put(receiveHistoryBookGet(receiveData))
    }
  } catch (error) {
    console.error(error.message)
  }
  return 0
}