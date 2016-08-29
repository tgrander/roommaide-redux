import React, { Component } from 'react'
import InlineEdit from 'react-edit-inline'

import '../css/roommate.css'

const Roommate = ( {
  roommate,
  onAmountInput,
  onUpdateName,
  onUpdateUtility
}) => {

  const id = roommate.id

  const input = (e) => {
    const parsedAmount = +e.target.value
    if (Number.isInteger(parsedAmount)) {
      onAmountInput(id, parsedAmount)
    }
  }

  const updateName = (updatedContent) => {
    onUpdateName(id, updatedContent.name)
  }

  const updateUtility = (updatedContent) => {
    onUpdateUtility(id, updatedContent.utility)
  }

  return (
    <div className='roommate'>

      <InlineEdit
        className='name'
        activeClassName='editing-name'
        text={roommate.name}
        paramName='name'
        change={updateName}
      /><br/>

      <InlineEdit
        className='utility'
        activeClassName='editing-utility'
        text={roommate.utility}
        paramName='utility'
        change={updateUtility}
      /><br/>

      <input
          className="amount-input"
          type="text"
          placeholder="Enter Amount"
          onChange={e => input(e)}
      />

    </div>
  )
}

export default Roommate
