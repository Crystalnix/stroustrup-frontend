// @flow
import type { BookType } from '../../types'

export type BookReducerType = BookType & {
  isFetching: boolean,
  isbnIsFetching: boolean,
}

