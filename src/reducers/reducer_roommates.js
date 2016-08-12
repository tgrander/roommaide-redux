import {
  NAME_CHANGE,
  UTILITY_CHANGE,
  AMOUNT_CHANGE,
  UPLOAD_PHOTO
} from '../actions/roommate_actions'

function Roommate(name, utility, amount){
  this.name=name
  this.utility=utility
  this.amount=amount
  this.payTo={}
  this.receiveFrom={}
}

const INITIAL_STATE = {
  roommates: {},
  total: 0
}

function roommates(state=INITIAL_STATE, action){
  switch (action.type) {
    case NAME_CHANGE:
      return Object.assign({}, state, {
        const roommate = roommates[action.id]
        roommate[name] = action.name
      })
      break;
    case UTILITY_CHANGE:
      return Object.assign({}, state, {
        const roommate = roommates[action.id]
        roommate[utility] = action.utility
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
