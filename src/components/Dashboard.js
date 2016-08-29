import React, { Component } from 'react'

import RoommatesList from './RoommatesList'
import TotalApp from '../containers/TotalApp'

const Dashboard = ({
  roommates,
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
