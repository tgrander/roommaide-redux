import {
  NAME_CHANGE,
  UTILITY_CHANGE,
  AMOUNT_CHANGE,
  UPLOAD_PHOTO
} from '../actions/roommate_actions'

const INITIAL_STATE = {
  roommates: {},
  total: 0
}

function roommates(state=INITIAL_STATE, action){
  switch (action.type) {
    case NAME_CHANGE:
      return Object.assign({}, state, {
        {action.id: {name: action.name}}
      })
      break;
    case UTILITY_CHANGE:
      return Object.assign({}, state, {
        roommates[utility] = action.utility
      })
      break;
    case AMOUNT_CHANGE:

      break;
    case UPLOAD_PHOTO:

      break;
    default:
      return state
  }
}
