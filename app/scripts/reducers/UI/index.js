import { combineReducers } from 'redux'
import description from './Description'
import drawer from './Drawer'

export const uiReducers = combineReducers({
  description,
  drawer,
})

export default uiReducer
