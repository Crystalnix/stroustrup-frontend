// @flow
import type {
  Sign,
  User,
} from '../types'

export type Action = {
  type: string,
}

export type SignAction = Action & {
  requestData: Sign,
}

export type UserAction = Action & {
  requestData: User,
}