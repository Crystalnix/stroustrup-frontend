// @flow
import {
  REQUEST_BOOK,
  RECEIVE_BOOK,
  REMOVE_BOOK
} from '../../../constants/ActionTypes'
import type {
  Book,
  IDToken,
} from '../../../config/types'
import type {
  BookAction,
  IDTokenAction,
} from '../../types'

export function requestBook(data: IDToken): IDTokenAction {
  return {
    type: REQUEST_BOOK,
    data,
  }
}

export function receiveBook(data: Book): BookAction {
  return {
    type: RECEIVE_BOOK,
    data,
  }
}

export function removeBook(): Action {
  return {
    type: REMOVE_BOOK,
  }
}
