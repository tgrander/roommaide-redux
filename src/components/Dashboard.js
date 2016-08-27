import React, { Component } from 'react'

import RoommatesList from './RoommatesList'
import TotalApp from '../containers/TotalApp'

// const Dashboard = ({
//   roommates,
//   onAmountInput,
//   onAddRoommateClick
// }) => {
//   return (
//     <div>
//       <RoommatesList
//         roommates={roommates}
//         onAmountInput={onAmountInput}
//         onAddRoommateClick={onAddRoommateClick}
//         />
//       <TotalApp />
//     </div>
//   )
// }

class Dashboard extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <RoommatesList
          roommates={this.props.roommates}
          onAmountInput={this.props.onAmountInput}
          onAddRoommateClick={this.props.onAddRoommateClick}
          />
        <TotalApp />
      </div>
    )
  }
}



export default Dashboard
