export const NAME_CHANGE = 'NAME_CHANGE'
export const UTILITY_CHANGE = 'UTILITY_CHANGE'
export const AMOUNT_CHANGE = 'AMOUNT_CHANGE'
export const UPLOAD_PHOTO = 'UPLOAD_PHOTO'

function name(id, name){
  return {
    type: NAME_CHANGE,
    id,
    name
  }
}
function utility(id, utility){
  return {
    type: UTILITY_CHANGE,
    id,
    utility
  }
}
function amount(id, amount){
  return {
    type: AMOUNT_CHANGE,
    id,
    amount
  }
}
function photo(id, photo){
  return {
    type: UPLOAD_PHOTO,
    id,
    photo
  }
}
