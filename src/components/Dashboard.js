import React from 'react'

import RoommatesList from './RoommatesList'
import Summary from './Summary'

const Dashboard = ({roommates, total, handleAmountInput, addRoommate}) => {
  return (
    <div>
      <RoommatesList
        roommates={roommates}
        handleAmountInput={handleAmountInput}
        addRoommate={addRoommate}
      />
      <Summary
        total={total}
      />
    </div>
  )
}

export default Dashboard
