import React from 'react'

import RoommatesList from './RoommatesList'
import TotalApp from '../containers/TotalApp'

const Dashboard = ({
  roommates,
  total,
  numberofRoommates,
  onAmountInput,
  onAddRoommateClick
}) => {
  return (
    <div>
      <RoommatesList
        roommates={roommates}
        onAmountInput={onAmountInput}
        onAddRoommateClick={onAddRoommateClick}
        />
      <TotalApp />
    </div>
  )
}



export default Dashboard
