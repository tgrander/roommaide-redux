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

export function updateAmount(id, amount){
  return {
    type: INPUT_AMOUNT,
    id,
    amount
  }
}

function updateRoommates(newRoommateId, newRoommate){
  return {
    type: ADD_ROOMIE,
    newRoommateId,
    newRoommate
  }
}

export function addRoommate(){
  return dispatch => {
    const newRoommate = new Roommate()
    const id = newRoommate.id
    return dispatch(updateRoommates(id, newRoommate))
  }
}

export function deleteRoommate(id, roommates){
  return {
    type: DELETE_ROOMIE,
    id,
    numberofRoommates: Object.keys(roommates).length
  }
}
