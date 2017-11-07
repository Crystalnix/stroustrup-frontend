import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
} from '../../../constants/ActionTypes'

const initialState: GetReducer = {
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
        comments: action.comments,
        isFetching: false,
      }
    default:
      return state
  }
}

export default getReducer
