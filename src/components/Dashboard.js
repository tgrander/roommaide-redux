import React from 'react'

import RoommateList from './RoommateList'
import Summary from './Summary'

const Dashboard = ( { roommates, total } ) => {
  return (
    <div>
      <RoommateList
        roommates={roommates}/>
      <Summary
        total={total}/>
    </div>
  )
}

export default Dashboard
