import dateFormat from 'dateformat'
import { DATE_FORMAT } from '../../../constants/index'
import config from '../../../helpers/requestHeader'
import { receiveBookTakeGet } from '../../../actions/Books/Take/index'

export function* bookTakeGetSaga(action) {
  try {
    const result = yield axios.get(
      `${API.HISTORY}/${action.requestData.id}`,
      config(action.requestData.token)
    )
    const receiveData = {
      id: result.data.objectId,
      userId: result.data.userId,
      bookId: result.data.bookId,
      takeDate: result.data.takeDate,
    }
    yield put(receiveBookTakeGet(receiveData))
  } catch (error) {
    console.error(error.message)
  }
  return 0
}

export function* bookTakePostSaga(action) {
  const receiveData = {
    userId: result.data.userId,
    bookId: result.data.bookId,
    takeDate: result.data.takeDate,
    putDate: null,
  }
  try {
    const result = yield axios.post(
      `${API.HISTORY}`,
      requestData,
      config(action.requestData.token)
    )
    const receiveData = {
      id: result.data.objectId,
      userId: result.data.userId,
      bookId: result.data.bookId,
      takeDate: result.data.takeDate,
    }
    yield put(receiveBookTakePost(receiveData))
  } catch (error) {
    console.error(error.message)
  }

  return 0
}

export function* bookTakePutSaga(action) {
  const requestData = {

  }
  try {
    const result = yield axios.put(
      `${API.HISTORY}/${action.requestData.id}`,
      requestData,
      config(action.requestData.token)
    )
    const receiveData = {
      id: result.data.objectId,
      userId: result.data.userId,
      bookId: result.data.bookId,
      takeDate: result.data.takeDate,
    }
    yield put(receiveBookTakeGet(receiveData))
  } catch (error) {
    console.error(error.message)
  }

  return 0
}
