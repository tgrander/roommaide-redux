import React, { Component } from 'react'

const Roommate = ( { roommate } ) => {
  return (
    <div className='roommate'>
      <div className='name'> {roommate.name} </div>
      <div className='utility'> {roommate.utility} </div>
      <div className='amount'> {roommate.amount} </div>
    </div>
  )
}

export default Roommate
