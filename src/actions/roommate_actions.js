import Roommate from '../utilities/roommates'
import calculateTotal from '../utilities/total'

export const NAME_EDIT = 'NAME_EDIT'
export function updateName(id, name){
  return {
    type: NAME_EDIT,
    id,
    name
  }
}

export const UTILITY_EDIT = 'UTILITY_EDIT'
export function updateUtility(id, utility){
  return {
    type: UTILITY_EDIT,
    id,
    utility
  }
}

export const INPUT_AMOUNT = 'INPUT_AMOUNT'
export function updateAmount(id, amount){
  return {
    type: INPUT_AMOUNT,
    id,
    amount
  }
}

export const ADD_ROOMIE = 'ADD_ROOMIE'
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

export const DELETE_ROOMIE = 'DELETE_ROOMIE'
export function deleteRoommate(id, roommates){
  return {
    type: DELETE_ROOMIE,
    id,
    numberofRoommates: Object.keys(roommates).length
  }
}
