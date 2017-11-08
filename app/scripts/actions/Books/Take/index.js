import {
  REQUEST_BOOK_TAKE_GET,
  RECEIVE_BOOK_TAKE_GET,
  REQUEST_BOOK_TAKE_POST,
  RECEIVE_BOOK_TAKE_POST,
  REQUEST_BOOK_TAKE_PUT,
  RECEIVE_BOOK_TAKE_PUT,
} from '../../../constants/ActionTypes'

export function requestBookTakeGet(requestData) {
  return {
    type: REQUEST_BOOK_TAKE_GET,
    requestData,
  }
}

export function receiveBookTakeGet(receiveData) {
  return {
    type: RECEIVE_BOOK_TAKE_GET,
    receiveData,
  }
}

export function requestBookTakePost(requestData) {
  return {
    type: REQUEST_BOOK_TAKE_POST,
    requestData,
  }
}

export function receiveBookTakePost(receiveData) {
  return {
    type: RECEIVE_BOOK_TAKE_POST,
    receiveData,
  }
}

export function requestBookTakePut(requestData) {
  return {
    type: REQUEST_BOOK_TAKE_PUT,
    requestData,
  }
}

export function receiveBookTakePut(receiveData) {
  return {
    type: RECEIVE_BOOK_TAKE_PUT,
    receiveData,
  }
}