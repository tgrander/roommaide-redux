import React from 'react'

const Total = ({total, numberofRoommates}) => {

    const perRoommate = (total, numberofRoommates) => {
      return numberofRoommates > 0 ? total/numberofRoommates : 0
    }

    return (
      <div>
        Total: ${total} <br/>
        Per Roommate: ${perRoommate(total, numberofRoommates)}
      </div>
    )
}

export default Total
