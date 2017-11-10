import axios from 'axios'
import { put } from 'redux-saga/effects'
import API from '../../../constants/API'
import { receiveLogin } from '../../../actions/Users/Login'
import { setUser } from '../../../actions/Users/Get'

export function* loginSaga(action) {
  try {
    const requestData = {
      login: action.data.email,
      password: action.data.password,
    }
    const result = yield axios.post(`${API.LOGIN}`, requestData)
    if (result.status === 200) {
      const receiveData = {
        id: result.data.objectId,
        token: result.data['user-token'],
        name: result.data.name,
        email: result.data.email,
        role: result.data.role,
        isAuth: true,
      }
      localStorage.setItem('user', JSON.stringify(receiveData))
      yield put(setUser(receiveData))
      yield put(receiveLogin())
    } else {
      console.error(result.status, ': ', result.statusText)
    }
  } catch (error) {
    console.error(error.message)
  }
  return -2
}