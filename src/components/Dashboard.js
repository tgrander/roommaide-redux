import React from 'react'

import RoommatesList from './RoommatesList'
import Summary from './Summary'

const Dashboard = ({roommates, total}) => {
  return (
    <div>
      <RoommatesList
        roommates={roommates}
      />
      <Summary
        total={total}
      />
    </div>
  )
}

export default Dashboard
