// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = prompt ('Pick a random number?')
 
  const countDown = 1

  while (count > 0) {
    alert(count + '...')
    count = count - countDown
  }
   
  alert('Lift Off!')
}

function make1() {
  // copy and paste your code here when you get to the Make step

let max = prompt('Enter a maximum number...')
let inc = prompt ('Enter an increment for that number to count down in...')
let count = 0
max =Number (max)
inc =Number (inc)
while (count <= max) {
  alert (count)
  left = max - count
  count = count + inc
}

alert ('All done, with ' + left + ' leftover!!')
  
}