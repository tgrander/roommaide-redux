import React from 'react'

import Roommate from './Roommate'

const RoommatesList = ({roommates, onAmountInput, onAddRoommateClick}) => {

  const mapRoommates = (roommates) => (
    Object.keys(roommates).map(id =>
      <Roommate
        key={id}
        roommate={roommates[id]}
        roommates={roommates}
        onAmountInput={onAmountInput}
      />
    )
  )

  const newRoommate = (e) => {
    e.preventDefault()
    console.log('Roommates after click: ', roommates);
    setTimeout(() => (console.log('Roommates after click / 500ms', roommates)), 500)
    onAddRoommateClick(roommates)
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
