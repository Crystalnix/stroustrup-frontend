import axios from 'axios'
import { put } from 'redux-saga/effects'
import API from '../../../constants/API'
import { receiveRegister } from '../../../actions/Users/Register/index'

export function* registerSaga(action) {
  const requestData = {
    ...action.data,
    name: action.data.email.substring(0, action.data.email.indexOf('@')),
  }
  try {
    const result = yield axios.post(`${API.REGISTER}`, requestData)
    if (result.status === 200) {
      yield put(receiveRegister())
    } else {
      console.error(result.status, ': ', result.statusText)
    }
  } catch (error) {
    console.error(error.message)
  }
  return 0
}