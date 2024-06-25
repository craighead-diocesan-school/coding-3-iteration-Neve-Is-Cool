// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  // write your code here

 
let number = prompt ('What number do you want the Square Series for?')
number = Number (number)
let series = ''

while (number > 0) {
square = number * number 
series += square + ' ,'
number = number -1
}

alert (series)

}
