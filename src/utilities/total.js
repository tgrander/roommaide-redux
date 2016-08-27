const calculateTotal = (roommates) => {
  let total = 0
  for (var key in roommates) {
    total += roommates[key].amount
  }
  return total
}

export default calculateTotal
