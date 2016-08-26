import React from 'react'

import Roommate from './Roommate'

const RoommatesList = ({roommates, handleAmountInput, addRoommate}) => {

  const mapRoommates = (roommates) => (
    Object.keys(roommates).map(id =>
      <Roommate
        key={id}
        roommate={roommates[id]}
        handleAmountInput={handleAmountInput}
      />
    )
  )

  const newRoommate = (e) => {
    e.preventDefault()
    console.log('Roommates after click: ', roommates);
    setTimeout(() => (console.log('Roommates after click / 500ms', roommates)), 500)
    addRoommate()
  }

  return (
    <div>
      <div>
        {mapRoommates(roommates)}
      </div><br/>
      <a
        className="add-roomie"
        onClick={e => newRoommate(e)}>
        Add Roommate + </a>
    </div>
  )

}



export default RoommatesList
