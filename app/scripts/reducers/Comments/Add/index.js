// @flow
import {
  REQUEST_COMMENT_ADD,
  RECEIVE_COMMENT_ADD,
  REMOVE_COMMENT_ADD,
} from '../../../constants/ActionTypes'

const initialState: any = {
  isFetching: false,
}

const addReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_COMMENT_ADD:
      return {
        isFetching: true,
      }
    case RECEIVE_COMMENT_ADD:
      return {
        isFetching: false,
      }
    case REMOVE_COMMENT_ADD:
      return initialState
    default:
      return state
  }
}

export default addReducer
