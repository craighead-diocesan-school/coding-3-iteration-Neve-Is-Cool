// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  
  let num = prompt ('What number do you want the Factorial for')
  num = Number (num)
  let factorNum = 1

  while (factorNum> 0) {
    factorNum = num * num
    num = num - 1
  }
  
  alert ('The factorial is...       ' + factorNum)
}
