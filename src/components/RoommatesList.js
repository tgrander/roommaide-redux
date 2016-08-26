import React from 'react'

import Roommate from './Roommate'

const RoommatesList = ({roommates, handleAmountInput}) => {

  const mapRoommates = (roommates) => (
    Object.keys(roommates).map(id =>
      <Roommate
        key={id}
        roommate={roommates[id]}
        handleAmountInput={handleAmountInput}
      />
    )
  )

  return (
    <div>
      {mapRoommates(roommates)}
    </div>
  )

}



export default RoommatesList
