// @flow
import { REQUEST_BOOKSHELF, RECEIVE_BOOKSHELF } from '../constants/ActionTypes'
import type { BookshelfBookType } from '../types'

export function requestBookshelf(token: string): {type: string} {
  return {
    type: REQUEST_BOOKSHELF,
    token,
  }
}


export function receiveBookshelf(books: ?Array<any>): {type: string, books: ?Array<any>} {
  return {
    type: RECEIVE_BOOKSHELF,
    books: books ? books.map((book: { objectId: string, name: string }): BookshelfBookType => ({
      id: book.objectId,
      name: book.name,
    })) : [],
  }
}
