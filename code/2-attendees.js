// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let numOfAttendees = prompt  ('How many attendees will their be.')
  let attendeeList = ''
  
  while (count < numOfAttendees) {
    let attendee = prompt('What are their names?')
    attendeeList = attendeeList + attendee + ', '
    count = count + 1
  }
  
  alert(attendeeList) 
}

function make2() {
  
  let number = prompt ('How many numbers do you want to add together?')

  let totalNumOfNum = number

  let count = 0
  let oldNumber = 0
  number = Number (number)

  while (count < number) {
    let newNumber = prompt ('Enter a number')
    newNumber = Number (newNumber)
    oldNumber = oldNumber + newNumber
    oldNumber = Number (oldNumber)
    count = count + 1
  }

  alert (oldNumber)
  let average = oldNumber / totalNumOfNum
  alert ('The average of your ' + totalNumOfNum + ' numbers is ' + average)
  
}