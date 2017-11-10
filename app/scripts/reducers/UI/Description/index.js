// @flow
import { SET_DESCRIPTION } from '../../../constants/ActionTypes'

const initialState: boolean = false

const descriptionReducer = (state: boolean = initialState, action: any) => {
  switch (action.type) {
  case SET_DESCRIPTION:
    return action.description
  default:
    return state
  }
}

export default descriptionReducer
