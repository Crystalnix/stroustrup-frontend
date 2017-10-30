// @flow
import {
  REQUEST_BOOK,
  RECEIVE_BOOK,
  REQUEST_ADD_BOOK,
  RECEIVE_ADD_BOOK,
} from '../constants/ActionTypes'
import type { BookType } from '../types'

export function requestBook(id: string, token: string): { type: string, id: string, token: string } {
  return {
    type: REQUEST_BOOK,
    id,
    token,
  }
}

export function receiveBook(book: BookType): { type: string, book: BookType } {
  return {
    type: RECEIVE_BOOK,
    book,
  }
}

export function requestAddBook(name: string, token: string): { type: string, name: string, token: string } {
  return {
    type: REQUEST_ADD_BOOK,
    name,
    token,
  }
}

export function receiveAddBook(book: BookType): { type: string, book: BookType } {
  return {
    type: RECEIVE_ADD_BOOK,
    book,
  }
}
