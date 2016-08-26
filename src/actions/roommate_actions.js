// import * as util from '../utilities/util.js'
import Roommate from '../utilities/util.js'

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
    roommates: roommates
    // total: calculateTotal(roommates)
  }
}
export function addRoommate(roommates){
  // console.log('util ', util)
  console.log('roommate constructor', Roommate);;
  const newRoommate = new Roommate, id = newRoommate.id;
  roommates[id] = newRoommate
  return {
    type: ADD_ROOMIE,
    updatedRoommates: roommates
  }
}
export function deleteRoommate(id, roommates){
  return {
    type: DELETE_ROOMIE,
    id
  }
}
