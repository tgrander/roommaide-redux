import Roommate from '../utilities/roommates'
import update from 'react-addons-update'

console.log('UPDATE FUNCTION: ', update);

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
  }
}

const roommates = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_EDIT:
      return

    case UTILITY_EDIT:
      return

    case INPUT_AMOUNT:
      return update(state, {
        roommates: {
          [action.id]: {
            amount: {$set: action.amount}
          }
        }
      })

    case ADD_ROOMIE:
      return update(state, {
        roommates: {
          [action.newRoommateId]: {$set: action.newRoommate}
        }
      })

    default:
      return state
  }
}

export function getTotal(roommates){
  Object.keys(roommates).reduce((total, id) => {
    total += roommates[id].amount
    return total
  }, 0)
}

export function getNumberOfRoommates(roommates){
  return Object.keys(roommates).length
}

export default roommates
