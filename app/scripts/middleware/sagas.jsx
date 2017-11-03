import axios from 'axios'
import { put } from 'redux-saga/effects'
import { receiveBookShelf } from '../actions/Books/Shelf/'
import { receiveBook } from '../actions/Books/Get'
import { receiveBookIsbn } from '../actions/Books/Isbn'
import { receiveBookAdd } from '../actions/Books/Add'
import { receiveRegister } from '../actions/Register'
import { receiveLogin } from '../actions/Login'
import API from '../constants/API'
import { setUser } from '../actions/User'

export function* receiveBookShelfSaga(action) {
  const config = {
    headers: {
      'user-token': action.token,
    },
  }
  try {
    const result = yield axios.get(`${API.BOOK}?props=title%2Cauthor%2Cimage&sortBy=created%20desc`, config)
    const books = result.data.map(item => ({
      id: item.objectId,
      title: item.title,
      author: item.author,
      image: item.image,
    }))
    yield put(receiveBookShelf(books))
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
    console.log(123);
    const result = yield axios.get(`${API.BOOK}/${action.id}`, config)
    const book = {
      id: result.data.objectId,
      isbn: result.data.isbn,
      title: result.data.title,
      subtitle: result.data.subtitle,
      author: result.data.author,
      image: result.data.image,
      publisher: result.data.publisher,
      date: result.data.published_date,
      count: result.data.page_count,
      description: result.data.description,
    }
    console.log(book);
    yield put(receiveBook(book))
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

export function* receiveBookAddSaga(action) {
  try {
    const config = {
      headers: {
        'user-token': action.token,
      },
    }
    let book = {
      ...action.book,
      page_count: `${+action.book.count}`,
      published_date: action.book.date,
    }
    delete book.date
    delete book.count
    const result = yield axios.post(`${API.BOOK}`, book, config)
    console.log(result.data)
    yield put(receiveBookAdd(result.data.objectId))
  } catch (error) {
    return error.message
  }
  return 0
}

export function* receiveBookIsbnSaga(action) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${action.isbn}`
  const result = (yield axios({
    method: 'GET',
    url,
  })).data.items[0].volumeInfo
  console.log(result);
  yield put(receiveBookIsbn({
    isbn: action.isbn,
    title: result.title,
    subtitle: result.subtitle,
    author: result.authors[0],
    image: result.imageLinks.thumbnail,
    publisher: result.publisher,
    date: result.publishedDate,
    count: result.pageCount,
    description: result.description,
  }))
  return 0
}
