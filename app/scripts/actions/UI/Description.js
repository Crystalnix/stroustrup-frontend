// @flow
import { SET_DESCRIPTION } from '../constants/ActionTypes'

function openDescription(): {type: string, description: boolean} {
  return {
    type: SET_DESCRIPTION,
    description: true,
  }
}

export default openDescription
