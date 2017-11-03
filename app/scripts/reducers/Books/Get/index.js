import {
  REQUEST_BOOK,
  RECEIVE_BOOK,
} from '../../../constants/ActionTypes'

const initialState: GetReducer = {
  id: '',
  isbn: '',
  title: '',
  subtitle: '',
  author: '',
  image: '',
  publisher: '',
  date: '',
  count: '',
  description: '',
  isFetching: false,
}

const getReducer = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_BOOK:
    return {
      ...state,
      isFetching: true,
    }
  case RECEIVE_BOOK:
    return {
      ...action.book,
      isFetching: false,
    }

  default:
    return state
  }
}

export default getReducer
