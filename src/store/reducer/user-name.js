import * as ActionType from '../action/action-types'
import * as userName from '../state/index'
export default (state = userName.userName, action) => {
  switch (action.type) {
    case ActionType.SETUSERNAME:
      return action.value
    case ActionType.REMOVEUSERNAME:
      return ''
    default:
      return state
  }
}