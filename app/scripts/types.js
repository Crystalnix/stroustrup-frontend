// @flow
export type Book = {
  title: string,
  subtitle: string,
  author: string,
  image: string,
  publisher: string,
  date: string,
  count: string,
  description: string,
}

export type BookWithId = Book & {
  id: string,
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

export type RegisterFormReducerType = {
  email: string,
  password: string,
  registerIsFetching: boolean,
}

export type LoginFormReducerType = {
  email: string,
  password: string,
  loginIsFetching: boolean,
}

export type SignFormActionType = {
  type: string,
  email: string,
  password: string,
}

export type UserType = {
  token: string,
  name: string,
  email: string,
  role: string,
  isAuth: boolean,
}
