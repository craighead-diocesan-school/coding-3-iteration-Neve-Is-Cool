// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  
  let num = prompt ('What number do you want the Factorial for')
  num = Number (num)
  let factorNum = 1

  const numDecrease = 1


  while (num > 0) {
    factorNum = factorNum * num
    num = num -numDecrease
  }
  
  alert ('The factorial is...  ' + factorNum )
}
