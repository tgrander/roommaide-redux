let idCounter = 1

export default function newRoommate(name, utility, amount){
  this.id=idCounter++
  this.name=name
  this.utility=utility
  this.amount=amount
  this.payTo={}
  this.receiveFrom={}
}
