import React from 'react'

import Roommate from './Roommate'

const RoommateList = () => (
  <div>
    {mapRoommates(roommates)}
  </div>
)

const mapRoommates = (roommates) => (
  roommates.map(roommate =>
    <Roommate
      key={roommate.id}
      roommate={roommate}
    />
  )
)

export default RoommateList
