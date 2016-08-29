import React, { Component } from 'react'

import RoommatesList from './RoommatesList'
import Summary from './Summary'

const Dashboard = ({
  roommates,
  onAmountInput,
  onAddRoommateClick,
  total,
  numberofRoommates
}) => {
  return (
    <div>
      <RoommatesList
        roommates={roommates}
        onAmountInput={onAmountInput}
        onAddRoommateClick={onAddRoommateClick}
        />
      <Summary
        total={total}
        numberofRoommates={numberofRoommates}
        />
    </div>
  )
}

export default Dashboard
