// @flow
import axios from 'axios'
import { put } from 'redux-saga/effects'
import API from '../../../constants/API'
import config from '../../../helpers/requestHeader'
import { receiveComments } from '../../../actions/Comments/Get'

type CommentResponse = {
  bookId: string,
  created: number,
  objectId: string,
  ownerId: string,
  postDate: string,
  text: string,
  updated: ?number,
  username: string,
  ___class: string,
  __meta: string,
}

type Comment = {
  id: string,
  ownerId: string,
  text: string,
  username: string,
  date: string,
}

export function* commentsSaga(action) {
  try {
    const result = yield axios.get(`${API.COMMENTS}?where=bookId%3D'${action.data.id}'&sortBy=created%20desc`, config(action.data.token))
    const comments = result.data.map((item: CommentResponse): Comment => ({
      id: item.objectId,
      ownerId: item.ownerId,
      text: item.text,
      username: item.username,
      date: item.postDate,
    }))
    yield put(receiveComments({ comments }))
  } catch (error) {
    return error.message
  }
  return 0
}
