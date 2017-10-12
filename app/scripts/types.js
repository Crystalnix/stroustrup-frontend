// @flow
export type BookType = {
  name: string,
  id: string,
  isFetching: boolean,
}

export type BookshelfBookType = {
  name: string,
  id: string,
}

export type BookshelfType = {
  books: Array<BookshelfBookType>,
  isFetching: boolean
}

export type ActionNoParams = {
  type: string,
}
