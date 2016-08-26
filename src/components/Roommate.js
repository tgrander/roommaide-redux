import React, { Component } from 'react'

import '../css/roommate.css'

const Roommate = ( { roommate } ) => {
  return (
    <div className='roommate'>
      <div className='name'> {roommate.name} </div>
      <div className='utility'> {roommate.utility} </div>
      <input
          className="amount-input"
          type="text"
          placeholder="Enter Amount"
          value={roommate.amount}/>
    </div>
  )
}

export default Roommate
