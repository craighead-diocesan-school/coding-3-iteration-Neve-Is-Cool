// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  
  let num = prompt ('What number do you want the Factorial for')
  num = Number (num)
  let factorNum = 1

  while (factorNum> 0) {
    newNum = num -1
    factorNum = num * newNum
  }
  
  alert ('The factorial is...       ' + newNum)
}
