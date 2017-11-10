// @flow
import {
  REQUEST_BOOK_ADD,
  RECEIVE_BOOK_ADD,
} from '../../../constants/ActionTypes'
import type {BookAddToken, ID} from '../../../config/types'
import type {BookAddTokenAction, IDAction} from "../../types";

export function requestBookAdd(data: BookAddToken): BookAddTokenAction {
  return {
    type: REQUEST_BOOK_ADD,
    data,
  }
}

export function receiveBookAdd(data: ID): IDAction {
  return {
    type: RECEIVE_BOOK_ADD,
    data,
  }
}
