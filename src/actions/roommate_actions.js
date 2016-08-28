import Roommate from '../utilities/roommates'
import calculateTotal from '../utilities/total'

export const ADD_ROOMIE = 'ADD_ROOMIE'
export const DELETE_ROOMIE = 'DELETE_ROOMIE'
export const INPUT_AMOUNT = 'INPUT_AMOUNT'
export const NAME_EDIT = 'NAME_EDIT'
export const UTILITY_EDIT = 'UTILITY_EDIT'

export function updateName(id, name, roommates){
  return {
    type: NAME_EDIT,
    id,
    name
  }
}

export function updateUtility(id, utility, roommates){
  return {
    type: UTILITY_EDIT,
    id,
    utility
  }
}

export function updateAmount(id, amount, roommates){
  roommates[id].amount = amount
  return {
    type: INPUT_AMOUNT,
    roommates: roommates,
    total: calculateTotal(roommates)
  }
}

function updateRoommates(){
  return {
    type: ADD_ROOMIE,
    updatedRoommates: roommates,
    numberofRoommates: Object.keys(roommates).length
  }
}

export function addRoommate(){
  return dispatch => {
    const newRoommate = new Roommate(), id = newRoommate.id;
    dispatch(updateRoommates())
  }
}

export function deleteRoommate(id, roommates){
  return {
    type: DELETE_ROOMIE,
    id,
    numberofRoommates: Object.keys(roommates).length
  }
}
