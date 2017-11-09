import axios from 'axios'
import { put } from 'redux-saga/effects'
import config from '../../../../helpers/requestHeader'
import { receiveHistoryBookGet } from '../../../../actions/History/Book/Get'
import API from '../../../../constants/API'

export function* historyBookGetSaga(action) {
  try {
    const result = yield axios.get(`${API.HISTORY}?where=bookId%3D${action.requestData.bookId}&sortBy=created%20desc`, config(action.requestData.token))
    if (result) {
      console.log(result)
      if (result.data[0]) {
        const resultData = yield axios.get(`${API.USERS}/${result.data[0].userId}?props=name`)
        const userData = {
          id: resultData.data.objectId,
          name: resultData.data.name,
        }
        const receiveData = {
          id: result.data[0].objectId,
          bookId: result.data[0].bookId,
          user: userData,
          takeDate: result.data[0].takeDate,
          putDate: result.data[0].putDate,
        }
        yield put(receiveHistoryBookGet(receiveData))
      }
    }
  } catch (error) {
    return error.message
  }
  return 0
}