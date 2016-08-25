import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  updateAmount,
  addRoommate,
  deleteRoommate,
  updateName,
  updateUtility
} from '../actions/roommate_actions'

class RoommateApp extends Component {

  render(){
    return (
      <div>

      </div>
    )
  }

}

export default RoommateApp

const mapStateToProps = (state) => {
  const { total, roommates } = state.roommates
  return {
    total,
    roommates
  }
}

export default connect(
  mapStateToProps,
  {
    updateAmount,
    addRoommate,
    deleteRoommate,
    updateName,
    updateUtility
  }
)(RoommateApp)
