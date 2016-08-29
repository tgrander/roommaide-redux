import React from 'react'
import Total from './Total'

const Summary = ({total, numberofRoommates}) => (
  <div>
    <h3>Summary</h3>
    <Total
      total={total}
      numberofRoommates={numberofRoommates}
      />
  </div>
)

export default Summary
