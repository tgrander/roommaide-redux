import React from 'react'

const Summary = ({total}) => (
  <div>
    <h3>Summary</h3>

      Total: ${total} <br/>
      Per Roommate: ${total/4}
  </div>
)

export default Summary
