import {
  ADD_ROOMIE,
  DELETE_ROOMIE,
  INPUT_AMOUNT,
  NAME_EDIT,
  UTILITY_EDIT
} from '../actions/roommate_actions'

const INITIAL_STATE = {
  roommates: {},
  total: 0
}

export function roommates(state=INITIAL_STATE, action){
  switch (action.type) {
    case NAME_CHANGE:
      return
      break;
    case UTILITY_CHANGE:
      return
      break;
    case AMOUNT_CHANGE:
      return 
      break;
    default:
      return state
  }
}
