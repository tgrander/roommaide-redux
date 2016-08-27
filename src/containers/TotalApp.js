// import React from 'react'
import { connect } from 'react-redux'

import Summary from '../components/Summary'

const mapStateToProps = (state) => {
  const { total, numberofRoommates } = state.roommates
  console.log('TOTAL APP STATE: ', state);
  return {
    total: total,
    numberofRoommates: numberofRoommates
  }
}

 const TotalApp = connect(
  mapStateToProps
)(Summary)

export default TotalApp
