import React from 'react'

import currentMonth from '../utilities/currentMonth.js'

const Calculations = ({total, numberofRoommates, roommates, totalPerRoommate}) => {

  const getTotalPerRoommate = (total, numberofRoommates) => {
    return numberofRoommates > 0 ? total/numberofRoommates : 0;
  }

  const perRoommate = getTotalPerRoommate(total, numberofRoommates)

  //STORAGE AND VARIABLES USED IN CALCULATION
  let overpaid = [],
      underpaid = [],
      even = [],
      resultsList = [];

  let paidAmounts = {},
      allocationPercentages = {},
      owedAmounts = {};

  let totalOverpaid = 0

  // POPULATES OVERPAID AND UNDERPAID WITH ROOMIE IDS
  for (var id in roommates) {
    const roommate = roommates[id]
    const paid = roommate.amount-perRoommate;

    if (paid > 0) {
      overpaid.push(id);
      totalOverpaid += paid

    } else if (paid < 0) {
      underpaid.push(id);

    } else if (paid === 0) {
      even.push(id);
    }

    paidAmounts[id] = paid;
}

// CALCULATES ALLOCATION PERCENTAGE
  overpaid.forEach(roommateId => {
    allocationPercentages[roommateId] = (paidAmounts[roommateId]/(1.0*totalOverpaid));
  })

// APPLIES ALLOCATION PERCENTAGE
  var results = underpaid.forEach((underpaidRoommateId) => {
    overpaid.forEach((overpaidRoommateId) => {
      var thisAmount = (paidAmounts[underpaidRoommateId]*-1)*(allocationPercentages[overpaidRoommateId]).toFixed(2);
      console.log("Owed Amount: ", thisAmount);
      var result = <p className="result">{`${roommates[underpaidRoommateId].name} owes ${roommates[overpaidRoommateId].name} $${thisAmount}`}</p>
        resultsList.push(result);
    })
  });


  return (
    <div>
      <h3>Utilities for {currentMonth()}</h3>
      {resultsList}
    </div>
  )
}

export default Calculations
