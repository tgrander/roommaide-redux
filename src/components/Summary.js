import React from 'react'
import Total from './Total'
import Calculations from './Calculations'

const Summary = ({total, numberofRoommates, roommates, totalPerRoommate}) => (
  <div>
    <h3>Summary</h3>
    <Total
      total={total}
      numberofRoommates={numberofRoommates}
      totalPerRoommate={totalPerRoommate}
      />
    <Calculations
      total={total}
      numberofRoommates={numberofRoommates}
      roommates={roommates}
      totalPerRoommate={totalPerRoommate}
      />
  </div>
)

export default Summary
