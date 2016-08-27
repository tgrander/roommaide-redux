import React, { Component } from 'react'

import Roommate from './Roommate'

// const RoommatesList = ({roommates, onAmountInput, onAddRoommateClick}) => {
//
//   const mapRoommates = (roommates) => (
//     Object.keys(roommates).map(id =>
//       <Roommate
//         key={id}
//         roommate={roommates[id]}
//         roommates={roommates}
//         onAmountInput={onAmountInput}
//       />
//     )
//   )
//
//   const newRoommate = (e) => {
//     e.preventDefault()
//     console.log('Roommates after click: ', roommates);
//     setTimeout(() => (console.log('Roommates after click / 500ms', roommates)), 500)
//     onAddRoommateClick(roommates)
//   }
//
//   return (
//     <div>
//       <div>
//         {mapRoommates(roommates)}
//       </div><br/>
//       <a
//         className="add-roomie"
//         onClick={e => newRoommate(e)}>
//         Add Roommate + </a>
//     </div>
//   )
//
// }


class RoommatesList extends Component {

  constructor(props){
    super(props)
    console.log('RL roommates: ', this.props.roommates);
    console.log('mapped', this.mapRoommates(this.props.roommates));
  }

  mapRoommates(roommates){
    return Object.keys(roommates).map(id =>
        <Roommate
          key={id}
          roommate={roommates[id]}
          roommates={roommates}
          onAmountInput={this.props.onAmountInput}
        />
    )
  }

  newRoommate(e){
    e.preventDefault()
    console.log('Roommates after click: ', this.props.roommates);
    setTimeout(() => (console.log('Roommates after click / 500ms', this.props.roommates)), 500)
    this.props.onAddRoommateClick(this.props.roommates)
  }

  render(){
    return(
      <div>
        <div>
          {this.mapRoommates(this.props.roommates)}
        </div><br/>
        <a
          className="add-roommate"
          onClick={e => this.newRoommate(e)}>
          Add Roommate + </a>
      </div>
    )
  }

}


export default RoommatesList
