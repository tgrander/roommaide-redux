let idCounter = 1

const Roommate = function(name, utility, amount){
  this.id = idCounter++
  this.name = name || `Roommate ${this.id}`
  this.utility = utility || 'Undefined Utility'
  this.amount = amount || ""
}

export default Roommate
