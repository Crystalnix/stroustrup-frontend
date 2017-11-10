// @flow
import type { BookshelfType } from '../../types'

export type Props = {
  requestBookshelf: () => mixed,
  bookshelf: BookshelfType,
  token: string,
}