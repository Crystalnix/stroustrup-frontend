// @flow
import * as types from '../constants/ActionTypes'
import type { BookshelfBookType } from '../types'

export function requestBookshelf(): {type: string} {
  return {
    type: types.REQUEST_BOOKSHELF,
  }
}


export function receiveBookshelf(books: ?Array<any>): {type: string, books: ?Array<any>} {
  return {
    type: types.RECEIVE_BOOKSHELF,
    books: books ? books.map((book: { objectId: string, name: string }): BookshelfBookType => ({
      id: book.objectId,
      name: book.name,
    })) : [],
  }
}
