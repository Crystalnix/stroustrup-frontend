// @flow
import {
  REQUEST_BOOK_SHELF,
  RECEIVE_BOOK_SHELF
} from '../../../constants/ActionTypes'
import type {
  Shelf,
  Token,
} from '../../../config/types'
import type {
  ShelfAction,
  TokenAction,
} from '../../types'

export function requestBookShelf(data: Token): TokenAction {
  return {
    type: REQUEST_BOOK_SHELF,
    data,
  }
}

export function receiveBookShelf(data: Shelf): ShelfAction {
  return {
    type: RECEIVE_BOOK_SHELF,
    data,
  }
}
