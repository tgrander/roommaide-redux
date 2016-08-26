import React, { Component } from 'react'

import '../css/roommate.css'

const Roommate = ( { roommate, handleAmountInput } ) => {

  const input = (e) => {
    const parsedAmount = +e.target.value
    if (Number.isInteger(parsedAmount)) {
      handleAmountInput(roommate.id, parsedAmount)
    }
  }

  return (
    <div className='roommate'>
      <div className='name'> {roommate.name} </div>
      <div className='utility'> {roommate.utility} </div>
      <input
          className="amount-input"
          type="text"
          placeholder="Enter Amount"

          onChange={e => input(e)}/>
    </div>
  )
}

export default Roommate
