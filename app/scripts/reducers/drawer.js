// @flow
import { CHANGE_DRAWER } from '../constants/ActionTypes'

const initialState: boolean = true

const drawerReducer = (state: boolean = initialState, action: any) => {
  switch (action.type) {
  case CHANGE_DRAWER:
    return action.drawer
  default:
    return state
  }
}

export default drawerReducer
