import {
  REQUEST_BOOK_TAKE_GET,
  RECEIVE_BOOK_TAKE_GET,
  REQUEST_BOOK_TAKE_POST,
  RECEIVE_BOOK_TAKE_POST,
  REQUEST_BOOK_TAKE_PUT,
  RECEIVE_BOOK_TAKE_PUT,
} from '../../../constants/ActionTypes'

const initialState: any = {
  id: null,
  userId: null,
  bookid: null,
  takeDate: null,
  isFetchingGet: false,
  isFetchingPost: false,
  isFetchingPut: false,
}

const takeReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BOOK_TAKE_POST:
      return {
        ...state,
        isFetchingPost: true,
      }
    case RECEIVE_BOOK_TAKE_POST:
      return {
        ...action.receiveData,
        isFetchingPost: false,
      }
    case REQUEST_BOOK_TAKE_PUT:
      return {
        ...state,
        isFetchingPut: true,
      }
    case RECEIVE_BOOK_TAKE_PUT:
      return initialState
    case REQUEST_BOOK_TAKE_GET:
      return {
        ...state,
        isFetchingGet: true,
      }
    case RECEIVE_BOOK_TAKE_GET:
      return {
        ...action.receiveData,
        isFetchingGet: true,
      }
    default:
      return state
  }
}

export default takeReducer
