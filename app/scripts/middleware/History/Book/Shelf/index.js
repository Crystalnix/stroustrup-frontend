import axios from 'axios'
import { put } from 'redux-saga/effects'
import config from '../../../../helpers/requestHeader'
import { receiveHistoryBookShelf } from '../../../../actions/History/Book/Shelf'
import API from '../../../../constants/API'

export function* historyBookShelfSaga(action) {
  try {
    const result = yield axios.get(`${API.HISTORY}?where=putDate%20is%20null&pageSize=100&sortBy=created%20desc`, config(action.data.token))
    let receiveData = []
    if (result) {
      if (result.data.length !== 0) {
        let i = 0
        for (; i < result.data.length; i++) {
          const receiveUser = yield axios.get(`${API.USERS}/${result.data[i].userId}?props=name`)
          const user = {
            id: receiveUser.data.objectId,
            name: receiveUser.data.name,
          }
          const receiveBook = yield axios.get(`${API.BOOK}/${result.data[i].bookId}?props=title`)
          const book = {
            id: receiveBook.data.objectId,
            title: receiveBook.data.title,
          }
          const id = result.data[i].objectId
          const takeDate = result.data[i].takeDate
          const item = {
            id,
            book,
            user,
            takeDate,
          }
          receiveData.push(item)
        }
        yield put(receiveHistoryBookShelf({ items: receiveData }))
      } else {
        yield put(receiveHistoryBookShelf({ items: [] }))
      }
    }
  } catch (error) {
    cosnole.error(error.message)
  }
  return 0
}