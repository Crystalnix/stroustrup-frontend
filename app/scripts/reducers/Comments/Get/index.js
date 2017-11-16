import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  REMOVE_COMMENTS,
} from '../../../constants/ActionTypes'

const initialState = {
  comments: [],
  isFetching: false,
}

const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_COMMENTS:
      return {
        comments: action.data.comments,
        isFetching: false,
      }
    case REMOVE_COMMENTS:
      return initialState
    default:
      return state
  }
}

export default getReducer
