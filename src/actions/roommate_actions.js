export const ADD_ROOMIE = 'ADD_ROOMIE'
export const DELETE_ROOMIE = 'DELETE_ROOMIE'
export const INPUT_AMOUNT = 'INPUT_AMOUNT'
export const NAME_EDIT = 'NAME_EDIT'
export const UTILITY_EDIT = 'UTILITY_EDIT'

export function updateName(id, name){
  return {
    type: NAME_EDIT,
    id,
    name
  }
}
export function updateUtility(id, utility){
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
export function addRoommate(){
  return {
    type: ADD_ROOMIE
  }
}
export function deleteRoommate(id){
  return {
    type: DELETE_ROOMIE,
    id
  }
}
