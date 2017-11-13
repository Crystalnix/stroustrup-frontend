// @flow
import {
  REQUEST_COMMENT_ADD,
  RECEIVE_COMMENT_ADD,
  COMMENTS_REFRESH,
} from '../../../constants/ActionTypes'

const initialState: any = {
  isFetching: false,
}

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMMENT_ADD:
      return {
        isFetching: true,
      }
    case RECEIVE_COMMENT_ADD:
      return {
        isFetching: false,
      }
    default:
      return state
  }
}

export default addReducer
