import React, { Component } from 'react'

import getTotalPerRoommate from '../reducers/reducer_roommates'

import RoommatesList from './RoommatesList'
import Summary from './Summary'


import '../css/Dashboard.css'

const Dashboard = ({
  roommates,
  onAmountInput,
  onAddRoommateClick,
  total,
  numberofRoommates,
  onUpdateUtility,
  onUpdateName,
  onDeleteRoommateClick
}) => {
  const totalPerRoommate = getTotalPerRoommate(total, numberofRoommates)
  return (
    <div className='dashboard'>

      <RoommatesList
        roommates={roommates}
        onAmountInput={onAmountInput}
        onAddRoommateClick={onAddRoommateClick}
        onUpdateName={onUpdateName}
        onUpdateUtility={onUpdateUtility}
        onDeleteRoommateClick={onDeleteRoommateClick}
        />

      <Summary
        roommates={roommates}
        total={total}
        numberofRoommates={numberofRoommates}
        totalPerRoommate={totalPerRoommate}
        />

      

    </div>
  )
}

export default Dashboard
