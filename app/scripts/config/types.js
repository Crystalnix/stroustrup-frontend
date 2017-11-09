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