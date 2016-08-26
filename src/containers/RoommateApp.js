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

      componentWillMount(){
          // Autmoatically create three roommates for presentation purposes when component mounts
          for (var i = 0; i < 4; i++) {
            this.props.addRoommate(this.props.roommates)
          }
      }

      _handleAmountInput(value){
        this.props.updateAmount(value)
      }

      render(){
          return (
            <div>
              <Header />
              <Story />
              <Dashboard
                roommates={this.props.roommates}
                total={this.props.total}/>
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
