import React, { Component } from 'react'

import Roommate from './Roommate'

import '../css/roommateList.css'

const RoommatesList = ({
  roommates,
  onAmountInput,
  onAddRoommateClick,
  onUpdateName,
  onUpdateUtility,
  onDeleteRoommateClick
}) => {

  const mapRoommates = (roommates) => (
    Object.keys(roommates).map(id =>
      <Roommate
        key={id}
        roommate={roommates[id]}
        onAmountInput={onAmountInput}
        onUpdateName={onUpdateName}
        onUpdateUtility={onUpdateUtility}
        onDeleteRoommateClick={onDeleteRoommateClick}
      />
    )
  )

  const newRoommate = (e) => {
    e.preventDefault()
    onAddRoommateClick()
  }

  return (
    <div className='roommate-list'>
      <div>
        {mapRoommates(roommates)}
      </div><br/>
      <a
        className="add-roomie"
        onClick={e => newRoommate(e)}
      >
        <span className='add-roomie-text'>Add Roommate</span>
        <span className="glyphicon glyphicon-user"></span>
        <span className="glyphicon glyphicon-plus"></span>
      </a>
    </div>
  )

}

export default RoommatesList
