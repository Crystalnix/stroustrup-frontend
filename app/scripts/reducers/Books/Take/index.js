// @flow
import {
  REQUEST_BOOK_ADD,
  RECEIVE_BOOK_ADD,
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
        id: action.id,
        isFetching: false,
      }
    default:
      return state
  }
}

export default addReducer
