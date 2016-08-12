export const NAME_CHANGE = 'NAME_CHANGE'
export const UTILITY_CHANGE = 'UTILITY_CHANGE'
export const AMOUNT_CHANGE = 'AMOUNT_CHANGE'
export const UPLOAD_PHOTO = 'UPLOAD_PHOTO'

function name(){
  return {
    type: NAME_CHANGE
  }
}

function utility(){
  return {
    type: UTILITY_CHANGE
  }
}

function amount(){
  return {
    type: AMOUNT_CHANGE
  }
}

function photo(){
  return {
    type: UPLOAD_PHOTO
  }
}
