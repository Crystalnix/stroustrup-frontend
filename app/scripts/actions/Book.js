// @flow
import {
  REQUEST_BOOK,
  RECEIVE_BOOK,
  REQUEST_ADD_BOOK,
  RECEIVE_ADD_BOOK,
  REQUEST_BOOK_ISBN, RECEIVE_BOOK_ISBN,
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

export function requestBookIsbn(isbn: string): { type: string, isbn: string } {
  return {
    type: REQUEST_BOOK_ISBN,
    isbn,
  }
}

export function receiveBookIsbn(): { type: string } {
  return {
    type: RECEIVE_BOOK_ISBN,
  }
}

export function requestAddBook(book: any, token: string): { type: string, token: string } {
  return {
    type: REQUEST_ADD_BOOK,
    token,
  }
}

export function receiveAddBook(book: BookType): { type: string, book: BookType } {
  return {
    type: RECEIVE_ADD_BOOK,
    book,
  }
}
