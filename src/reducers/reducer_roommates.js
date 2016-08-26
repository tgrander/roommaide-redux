import Roommate from '../utilities/roommates'

import {
  ADD_ROOMIE,
  DELETE_ROOMIE,
  INPUT_AMOUNT,
  NAME_EDIT,
  UTILITY_EDIT
} from '../actions/roommate_actions'

const INITIAL_STATE = {
  roommates: {
    1: new Roommate,
    2: new Roommate,
    3: new Roommate
  },
  numberofRoommates: 0,
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
        roommates: action.updatedRoommates,
        numberofRoommates: action.numberofRoommates
      })

    default:
      return state
  }
}

export default roommates
