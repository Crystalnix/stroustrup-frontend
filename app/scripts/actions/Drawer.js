// @flow
import { CHANGE_DRAWER } from '../constants/ActionTypes'

export function openDrawer(): {type: string, drawer: boolean} {
  console.log(2);
  return {
    type: CHANGE_DRAWER,
    drawer: true,
  }
}

export function closeDrawer(): {type: string, drawer: boolean} {
  console.log(1)
  return {
    type: CHANGE_DRAWER,
    drawer: false,
  }
}

export function toggleDrawer(drawer: boolean): {type: string, drawer: boolean} {
  console.log(drawer)
  return {
    type: CHANGE_DRAWER,
    drawer: drawer === false,
  }
}
