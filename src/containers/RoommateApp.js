import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dashboard from '../components/Dashboard'

import {
  updateAmount,
  addRoommate,
  deleteRoommate,
  updateName,
  updateUtility
} from '../actions/roommate_actions'

const mapStateToProps = (state) => {
  const { roommates } = state.roommates
  console.log('ROOMMATES: ', roommates);
  return {
    roommates: roommates
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAmountInput: (id, amount, roommates) => {
      dispatch(updateAmount(id, amount, roommates))
    },
    onAddRoommateClick: (roommates) => {
      dispatch(addRoommate(roommates))
    }
  }
}

const RoommateApp =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default RoommateApp
