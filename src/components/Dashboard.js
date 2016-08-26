import React from 'react'

import RoommatesList from './RoommatesList'
import Summary from './Summary'

const Dashboard = ({roommates, total, numberofRoommates}) => {
  return (
    <div>
      <RoommatesList
        roommates={roommates}/>
      <Summary
        total={total}
        numberofRoommates={numberofRoommates}/>
    </div>
  )
}

export default Dashboard
