import React from 'react'

const Total = ({total, numberofRoommates}) => (
  <div>
    Total: ${total} <br/>
    Per Roommate: ${total/numberofRoommates}
  </div>
)

export default Total
