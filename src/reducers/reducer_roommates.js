import Roommate from '../utilities/roommates'
import update from 'react-addons-update'

import {
  ADD_ROOMIE,
  DELETE_ROOMIE,
  INPUT_AMOUNT,
  NAME_EDIT,
  UTILITY_EDIT
} from '../actions/roommate_actions'

const INITIAL_STATE = {
  roommates: {
    1: new Roommate("Internet"),
    2: new Roommate("Gas"),
    3: new Roommate("Electricity")
  }
}

const roommates = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_EDIT:
      return update(state, {
        roommates: {
          [action.id]: {
            name: {$set: action.name}
          }
        }
      })

    case UTILITY_EDIT:
      return update(state, {
        roommates: {
          [action.id]: {
            utility: {$set: action.utility}
          }
        }
      })

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

    case DELETE_ROOMIE:
        const newState = $.extend(true, {}, state)
        const id = action.id
        console.log('id of deleted roommate: ', id);
        console.log('new State before delete: ', newState);
        console.log('you\'re doing it right: ', !(state.roommates == newState.roommates));
        delete newState.roommates.id
        console.log('new state after delete: ', newState);
        return newState

    default:
      return state
  }
}

export function getTotal(roommates){
  return Object.keys(roommates).reduce((total, id) => {
    total += roommates[id].amount
    return total
  }, 0)
}

export function getNumberOfRoommates(roommates){
  return Object.keys(roommates).length
}

export default roommates
