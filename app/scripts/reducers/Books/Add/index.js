// @flow
import {
  REQUEST_BOOK_ADD,
  RECEIVE_BOOK_ADD,
  REMOVE_BOOK_ADD,
} from '../../../constants/ActionTypes'
import type { Fetch } from '../../types'

const initialState: any = {
  id: '',
  isFetching: false,
}

const addReducer = (state: any = initialState, action: any): Fetch => {
  switch (action.type) {
  case REQUEST_BOOK_ADD:
    return {
      id: '',
      isFetching: true,
    }
  case RECEIVE_BOOK_ADD:
    return {
      id: action.data.id,
      isFetching: false,
    }
  case REMOVE_BOOK_ADD:
    return initialState
  default:
    return state
  }
}

export default addReducer
