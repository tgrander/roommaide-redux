import React, { Component } from 'react'

import Roommate from './Roommate'

import '../css/roommateList.css'

const RoommatesList = ({
  roommates,
  onAmountInput,
  onAddRoommateClick,
  onUpdateName,
  onUpdateUtility,
  onDeleteRoommateClick
}) => {

  const mapRoommates = (roommates) => (
    Object.keys(roommates).map(id =>
      <Roommate
        key={id}
        roommate={roommates[id]}
        onAmountInput={onAmountInput}
        onUpdateName={onUpdateName}
        onUpdateUtility={onUpdateUtility}
        onDeleteRoommateClick={onDeleteRoommateClick}
      />
    )
  )

  const newRoommate = (e) => {
    e.preventDefault()
    onAddRoommateClick()
  }

  return (
    <div className='roommate-list'>
      <div>
        {mapRoommates(roommates)}
      </div><br/>
      <a
        className="add-roomie"
        onClick={e => newRoommate(e)}
      >
        <span className='add-roomie-text'>Add Roommate</span>
        <span className="glyphicon glyphicon-user"></span>
        <span className="glyphicon glyphicon-plus"></span>
      </a>
    </div>
  )

}


// class RoommatesList extends Component {
//
//   constructor(props){
//     super(props)
//     console.log('RL roommates: ', this.props.roommates);
//     console.log('mapped', this.mapRoommates(this.props.roommates));
//   }
//
//   mapRoommates(roommates){
//     return Object.keys(roommates).map(id =>
//         <Roommate
//           key={id}
//           roommate={roommates[id]}
//           roommates={roommates}
//           onAmountInput={this.props.onAmountInput}
//         />
//     )
//   }
//
//   newRoommate(e){
//     e.preventDefault()
//     console.log('Roommates after click: ', this.props.roommates);
//     setTimeout(() => (console.log('Roommates after click / 500ms', this.props.roommates)), 500)
//     this.props.onAddRoommateClick(this.props.roommates)
//   }
//
//   render(){
//     return(
//       <div>
//         <div>
//           {this.mapRoommates(this.props.roommates)}
//         </div><br/>
//         <a
//           className="add-roommate"
//           onClick={e => this.newRoommate(e)}>
//           Add Roommate + </a>
//       </div>
//     )
//   }
//
// }


export default RoommatesList
