// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  // write your code here

  let fibseq = prompt ('What number do you want the Fibonacci Sequence up to?')
  fibseq = Number (fibseq)
  let first = 0
  let second = 1
  let fibNum = 0
  let sequence = ''
  

  while (fibNum < fibseq) {
    fibNum = first + second
    first = second
    second = fibNum
    sequence = sequence + fibNum + ', '

  }

  alert ('The Fibonacci Sequence is... 0, 1, ' + sequence)

}
