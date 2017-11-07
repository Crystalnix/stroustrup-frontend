import {
  REQUEST_COMMENT_ADD,
  RECEIVE_COMMENT_ADD,
  COMMENTS_REFRESH,
} from '../../../constants/ActionTypes'

const initialState: any = {
  refresh: false,
  isFetching: false,
}

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMMENT_ADD:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_COMMENT_ADD:
      return {
        ...state,
        refresh: true,
        isFetching: false,
      }
    case COMMENTS_REFRESH:
      return {
        ...state,
        refresh: false,
      }
    default:
      return state
  }
}

export default addReducer
