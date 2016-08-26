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

const roommates = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_EDIT:
      return

    case UTILITY_EDIT:
      return

    case INPUT_AMOUNT:
      return Object.assign({}, state, {
        roommates: action.roommates,
        total: action.total
      })

    case ADD_ROOMIE:
      return Object.assign({}, state, {
        roommates: action.updatedRoommates
      })

    default:
      return state
  }
}

export default roommates
