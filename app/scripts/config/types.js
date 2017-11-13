// @flow
export type Sign = {
  email: string,
  password: string,
}

export type User = {
  id: string,
  token: string,
  name: string,
  email: string,
  role: string,
  isAuth: boolean,
}

export type BookShort = {
  id: string,
  title: string,
  author: string,
  image: string,
}

export type Shelf = {
  books: Array<BookShort>
}

export type Token = {
  token: string,
}

export type BookAdd = {
  isbn: string,
  title: string,
  subtitle: string,
  author: string,
  image: string,
  publisher: string,
  date: string,
  count: string,
  description: string,
}

export type BookAddToken = Token & {
  book: BookAdd,
}


export type ID = {
  id: string,
}

export type UserShort = {
  id: string,
  name: string,
}

export type Book = BookAdd & ID & {
  user: ?UserShort,
}

export type IDToken = ID & Token
