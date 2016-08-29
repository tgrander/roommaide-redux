import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dashboard from '../components/Dashboard'

import { getTotal, getNumberOfRoommates } from '../reducers/reducer_roommates'

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
  console.log('TOTAL: ', getTotal(roommates));
  console.log('NUMBER OF ROOMMATES: ', getNumberOfRoommates(roommates));
  return {
    roommates: roommates,
    total: getTotal(roommates),
    numberofRoommates: getNumberOfRoommates(roommates)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAmountInput: (id, amount, roommates) => {
      dispatch(updateAmount(id, amount, roommates))
    },
    onAddRoommateClick: () => {
      dispatch(addRoommate())
    }
  }
}

const RoommateApp =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default RoommateApp
