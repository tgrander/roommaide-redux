import React from 'react'
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
  return {
    roommates: roommates,
    total: getTotal(roommates),
    numberofRoommates: getNumberOfRoommates(roommates)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAmountInput: (id, amount) => {
      dispatch(updateAmount(id, amount))
    },
    onAddRoommateClick: () => {
      dispatch(addRoommate())
    },
    onDeleteRoommateClick: (id) => {
      dispatch(deleteRoommate(id))
    },
    onUpdateName: (id, name) => {
      dispatch(updateName(id, name))
    },
    onUpdateUtility: (id, utility) => {
      dispatch(updateUtility(id, utility))
    }
  }
}

const RoommateApp =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default RoommateApp
