import axios from 'axios'
import { put } from 'redux-saga/effects'
import { receiveBookshelf } from '../actions/Bookshelf'
import {
  receiveBook,
  receiveAddBook,
  receiveBookIsbn,
} from '../actions/Book'
import { receiveRegister } from '../actions/Register'
import { receiveLogin } from '../actions/Login'
import API from '../constants/API'
import { setUser } from '../actions/User'

export function* receiveBookshelfSaga(action) {
  const config = {
    headers: {
      'user-token': action.token,
    },
  }
  try {
    const result = yield axios.get(`${API.BOOK}?sortBy=name`, config)
    yield put(receiveBookshelf(result.data))
  } catch (error) {
    return error.message
  }
  return 0
}

export function* receiveBookSaga(action) {
  const config = {
    headers: {
      'user-token': action.token,
    },
  }
  try {
    const result = yield axios.get(`${API.BOOK}/${action.id}`, config)
    yield put(receiveBook(result.data))
  } catch (error) {
    return error.message
  }
  return 0
}

export function* receiveRegisterSaga(action) {
  try {
    const result = yield axios.post(`${API.REGISTER}`, {
      email: action.email,
      name: action.email.substring(0, action.email.indexOf('@')),
      password: action.password,
    })
    console.log(result)
    yield put(receiveRegister())
  } catch (error) {
    return error.message
  }
  return 0
}

export function* receiveLoginSaga(action) {
  try {
    const result = yield axios.post(`${API.LOGIN}`, {
      login: action.email,
      password: action.password,
    })
    const user = {
      token: result.data['user-token'],
      name: result.data.name,
      email: result.data.email,
      role: result.data.role,
    }
    localStorage.setItem('user', JSON.stringify(user))
    yield put(receiveLogin())
    yield put(setUser(user.token, user.name, user.email, user.role, true))
  } catch (error) {
    console.log(error)
    return error.message
  }
  return 0
}

export function* receiveAddBookSaga(action) {
  try {
    const config = {
      headers: {
        'user-token': action.token,
      },
    }
    const result = yield axios.post(`${API.BOOK}`, {
      name: action.name,
    }, config)
    const book = {
      id: result.data.objectId,
      name: result.data.name,
    }
    yield put(receiveAddBook(book))
  } catch (error) {
    return error.message
  }
}

export function* receiveBookIsbnSaga(action) {
  console.log(action.isbn)
  // const config = {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //   },
  // }
  // const result = yield axios.get(`${API.ISBN}${action.isbn}`, config)

  // NEED_REQUEST_THROW_BACKEND!
  // const url = 'https://query.yahooapis.com/v1/public/yql?q=select'
  // + '* from json where url="http://isbndb.com/api/v2/json/7K390PBY/book/9781491950296"'
  // + '&format=json&diagnostics=true'
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${action.isbn}`
  const result = (yield axios({
    method: 'GET',
    url,
  })).data.items[0].volumeInfo
  console.log(result);
  // yield put(receiveBook({
  //   id: '',
  //   title: result.title,
  //   subtitle: result.subtitle,
  //   author: result.authors[0],
  //   image: result.imageLinks.thumbnail,
  //   publisher: result.publisher,
  //   date: result.publishedDate,
  //   count: result.pageCount,
  //   description: result.description,
  // }))
  // yield put(receiveBookIsbn())
  return 0
}
