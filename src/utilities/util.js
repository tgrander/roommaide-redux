let idCounter = 1

const Roommate = function(name, utility, amount){
  this.id = idCounter++
  this.name = name || `Roommate ${this.id}`
  this.utility = utility || 'Undefined Utility'
  this.amount = amount || ""
}

const calculateTotal = (roommates) => {
  let total = 0
  for (var key in roommates) {
    total += roommates[key].amount
  }
  return total
}

export default Roommate
// export default calculateTotal
