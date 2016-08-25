export const ADD_ROOMIE = 'ADD_ROOMIE'
export const DELETE_ROOMIE = 'DELETE_ROOMIE'
export const INPUT_AMOUNT = 'INPUT_AMOUNT'
export const NAME_EDIT = 'NAME_EDIT'
export const UTILITY_EDIT = 'UTILITY_EDIT'

function name(id, name){
  return {
    type: NAME_EDIT,
    id,
    name
  }
}
function utility(id, utility){
  return {
    type: UTILITY_EDIT,
    id,
    utility
  }
}
function amount(id, amount){
  return {
    type: INPUT_AMOUNT,
    id,
    amount
  }
}
function delete(id){
  return {
    action: DELETE_ROOMIE,
    id
  }
}
