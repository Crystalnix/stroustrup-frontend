import axios from 'axios'
import { put } from 'redux-saga/effects'
import dateFormat from 'dateformat'
import { DATE_FORMAT } from '../../../../constants/index'
import config from '../../../../helpers/requestHeader'
import { receiveHistoryBookPut } from '../../../../actions/History/Book/Put'
import { receiveHistoryBookGet } from '../../../../actions/History/Book/Get'
import API from '../../../../constants/API'

export function* historyBookPutSaga(action) {
  const requestData = {
    putDate: dateFormat(new Date(), DATE_FORMAT),
  }
  try {
    const result = yield axios.put(`${API.HISTORY}/${action.requestData.id}`, requestData, config(action.requestData.token))
    if (result) {
      console.log(result)
      const receiveData = {
        putDate: result.data.putDate,
      }
      yield put(receiveHistoryBookPut())
      yield put(receiveHistoryBookGet(receiveData))
    }
  } catch (error) {
    console.error(error.message)
  }
  return 0
}