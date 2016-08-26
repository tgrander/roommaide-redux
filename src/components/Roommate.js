import React, { Component } from 'react'

import '../css/roommate.css'

const Roommate = ( { roommate, handleAmountInput } ) => {

  const id = roommate.id
  const val = (amount) => {
    handleAmountInput(id, amount)
  }

  return (
    <div className='roommate'>
      <div className='name'> {roommate.name} </div>
      <div className='utility'> {roommate.utility} </div>
      <input
          className="amount-input"
          type="text"
          placeholder="Enter Amount"
          
          onChange={amount => input(amount)}/>
    </div>
  )
}

export default Roommate
