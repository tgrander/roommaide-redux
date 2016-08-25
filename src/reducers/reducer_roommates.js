import {
  ADD_ROOMIE,
  DELETE_ROOMIE,
  INPUT_AMOUNT,
  NAME_EDIT,
  UTILITY_EDIT
} from '../actions/roommateActions'

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
