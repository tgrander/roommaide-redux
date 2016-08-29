import React, { Component } from 'react'

import RoommatesList from './RoommatesList'
import Summary from './Summary'

const Dashboard = ({
  roommates,
  onAmountInput,
  onAddRoommateClick,
  total,
  numberofRoommates,
  onUpdateUtility,
  onUpdateName
}) => {
  return (
    <div>
      <RoommatesList
        roommates={roommates}
        onAmountInput={onAmountInput}
        onAddRoommateClick={onAddRoommateClick}
        onUpdateName={onUpdateName}
        onUpdateUtility={onUpdateUtility}
        />
      <Summary
        total={total}
        numberofRoommates={numberofRoommates}
        />
    </div>
  )
}

export default Dashboard
