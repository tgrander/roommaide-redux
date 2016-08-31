import React, { Component } from 'react'

import getTotalPerRoommate from '../reducers/reducer_roommates'

import RoommatesList from './RoommatesList'
import Summary from './Summary'
import Header from './Header'

import '../css/Dashboard.css'

const Dashboard = ({
  roommates,
  onAmountInput,
  onAddRoommateClick,
  total,
  numberofRoommates,
  onUpdateUtility,
  onUpdateName
}) => {
  console.log('per roommate function: ', getTotalPerRoommate);
  const totalPerRoommate = getTotalPerRoommate(total, numberofRoommates)
  return (
    <div>
    <div>
      <Header/>
    </div>
    <div className='dashboard'>
      <RoommatesList
        roommates={roommates}
        onAmountInput={onAmountInput}
        onAddRoommateClick={onAddRoommateClick}
        onUpdateName={onUpdateName}
        onUpdateUtility={onUpdateUtility}
        />
      <Summary
        roommates={roommates}
        total={total}
        numberofRoommates={numberofRoommates}
        totalPerRoommate={totalPerRoommate}
        />
    </div>
    </div>
  )
}

export default Dashboard
