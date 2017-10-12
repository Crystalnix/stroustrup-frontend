// @flow
import * as types from '../constants/ActionTypes'
import type { BookType } from '../types'

export function requestBook(id: string): { type: string, id: string } {
  return {
    type: types.REQUEST_BOOK,
    id,
  }
}

export function receiveBook(book: BookType): { type: string, book: BookType } {
  return {
    type: types.RECEIVE_BOOK,
    book,
  }
}
