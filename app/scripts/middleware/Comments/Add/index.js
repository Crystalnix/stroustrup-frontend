import axios from 'axios'
import { put } from 'redux-saga/effects'
import API from '../../../constants/API'
import config from '../../../helpers/requestHeader'
import { receiveCommentAdd } from '../../../actions/Comments/Add'
import { requestComments } from '../../../actions/Comments/Get'

export function* commentAddSaga(action) {
  try {
    const result = yield axios.post(`${API.COMMENTS}`, action.data.comment, config(action.data.token))
    if (result.status === 200) {
      yield put(receiveCommentAdd())
      yield put(requestComments({
        id: action.data.comment.bookId,
        token: action.data.token,
      }))
    } else {
      console.error(result.status, ': ', result.statusText)
    }
  } catch (error) {
    console.error(error.message)
  }
  return 0
}