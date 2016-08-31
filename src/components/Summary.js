import React from 'react'
import Total from './Total'
import Calculations from './Calculations'

import '../css/Summary.css'

const Summary = ({total, numberofRoommates, roommates, totalPerRoommate}) => (
  <div className='summary'>
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
