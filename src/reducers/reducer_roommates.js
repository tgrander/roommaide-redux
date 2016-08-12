import { ADD_CATEGORY } from '../actions/roommate_actions'

const INITIAL_STATE = {
  roommates: {
    1: {
      name: null,
      utility: null,
      amount: null
    },
    2: {
      name: null,
      utility: null,
      amount: null
    },
    3: {
      name: null,
      utility: null,
      amount: null
    }
  }
}

export default function roommates(state=INITIAL_STATE, action){
  switch (action.type) {
    case ADD_CATEGORY:
      return
      break;
    default:
      return state
  }
}
