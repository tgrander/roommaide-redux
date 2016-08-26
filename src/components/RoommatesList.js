import React from 'react'

import Roommate from './Roommate'

const RoommatesList = ({roommates}) => (
  <div>
    {mapRoommates(roommates)}
  </div>
)

const mapRoommates = (roommates) => (
  Object.keys(roommates).map(id =>
    <Roommate
      key={id}
      roommate={roommates[id]}
    />
  )
)

export default RoommatesList
