// @flow
import type {
  Sign,
  User,
  Shelf,
  Token, BookAddToken, ID, IDToken, Book,
} from '../config/types'

export type Action = {
  type: string,
}

export type SignAction = Action & {
  data: Sign,
}

export type UserAction = Action & {
  data: User,
}

export type ShelfAction = Action & {
  data: Shelf,
}

export type TokenAction = Action & {
  data: Token,
}

export type BookAddTokenAction = Action & {
  data: BookAddToken,
}

export type IDAction = Action & {
  data: ID,
}

export type IDTokenAction = Action & {
  data: IDToken,
}

export type BookAction = Action & {
  data: Book,
}
