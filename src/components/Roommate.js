import React, { Component } from 'react'
import InlineEdit from 'react-edit-inline'

import '../css/roommate.css'

const Roommate = ( {
  roommate,
  onAmountInput,
  onUpdateName,
  onUpdateUtility,
  onDeleteRoommateClick
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

  const deleteRoommate = () => {
    onDeleteRoommateClick(id)
  }

  const showEditIcons = () => {
      const icons = $('.invis')
      icons.css('display', 'inline')
      $('.roommate').bind('mouseleave', function(){
        icons.css('display', 'none')
      })
  }

  return (
    <div className='roommate' onMouseEnter={e => showEditIcons()}>

      <InlineEdit
        className='name'
        activeClassName='editing-name'
        text={roommate.name}
        paramName='name'
        change={updateName}
      />
      <span className='invis'>
        <span className='glyphicon glyphicon-pencil'></span>
      </span>
      <br/>

      <InlineEdit
        className='utility'
        activeClassName='editing-utility'
        text={roommate.utility}
        paramName='utility'
        change={updateUtility}
      />
      <span className='invis'>
        <span className='glyphicon glyphicon-pencil'></span>
      </span>
      <br/>

      <input
          className="amount-input"
          type="text"
          placeholder="Enter Amount"
          onChange={e => input(e)}
      />
      <span className='remove-icon invis' onClick={e => deleteRoommate()}>
        <span className='glyphicon glyphicon-remove-circle'></span>
      </span>
    </div>
  )
}

export default Roommate
