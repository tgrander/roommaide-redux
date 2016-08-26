import React from 'react'

import RoommatesList from './RoommatesList'
import Summary from './Summary'

const Dashboard = ({roommates, total, handleAmountInput}) => {
  return (
    <div>
      <RoommatesList
        roommates={roommates}
        handleAmountInput={handleAmountInput}
      />
      <Summary
        total={total}
      />
    </div>
  )
}

export default Dashboard
