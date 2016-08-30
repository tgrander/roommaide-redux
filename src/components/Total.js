import React from 'react'


const Total = ({total, numberofRoommates, totalPerRoommate}) => {

  const getTotalPerRoommate = (total, numberofRoommates) => {
    return numberofRoommates > 0 ? total/numberofRoommates : 0;
  }

    return (
      <div>
        <div className='totals'>
            Total: ${total} <br/>
            Per Roommate: ${getTotalPerRoommate(total, numberofRoommates)}
        </div>
      </div>
    )
}

export default Total
