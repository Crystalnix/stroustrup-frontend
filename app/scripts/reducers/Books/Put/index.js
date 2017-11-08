// @flow
import {
  REQUEST_BOOK_PUT,
  RECEIVE_BOOK_PUT,
} from '../../../constants/ActionTypes'
import type { Fetch } from '../../types'

const initialState: any = {
  isFetching: false,
}

const putReducer = (state: any = initialState, action: any): Fetch => {
  switch (action.type) {
    case REQUEST_BOOK_PUT:
      return {
        isFetching: true,
      }
    case RECEIVE_BOOK_PUT:
      return {
        isFetching: false,
      }
    default:
      return state
  }
}

export default putReducer
