import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Story from '../components/Story'
import Dashboard from '../components/Dashboard'

import {
  updateAmount,
  addRoommate,
  deleteRoommate,
  updateName,
  updateUtility
} from '../actions/roommate_actions'

class RoommateApp extends Component {

      constructor(props){
          super(props)
          console.log("PROPS: ", this.props);
      }

      _handleAmountInput(id, amount){
          this.props.updateAmount(id, amount, this.props.roommates)
      }
      _handleAddRoommateClick(){
        this.props.addRoommate(this.props.roommates)
      }

      render(){
          return (
            <div>
              <Header />
              <Story />
              <Dashboard
                roommates={this.props.roommates}
                total={this.props.total}
                handleAmountInput={this._handleAmountInput.bind(this)}
                addRoommate={this._handleAddRoommateClick.bind(this)}/>
            </div>
          )
      }

}

export default RoommateApp

const mapStateToProps = (state) => {
  console.log('STATE: ', state);
  const { total, roommates } = state.roommates
  return {
    total: total,
    roommates: roommates
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
