// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

// My solution
// Does not account for very large numbers :(

function isPrime(num) {
  var digitsArr = (""+num).split("")
  if (num === 0 || num === 1 || Math.sign(num) === -1) {
    return false
  }
  if ( Number.isInteger(num / 2) === true && num !== 2 ) {
    return false
  }
  var isDivisiblebyThree = digitsArr.reduce((a, b) => a + b) % 3 === 0
  if (isDivisiblebyThree === true && num !== 3) {
    return false
  }
  if (num > 5 && parseInt(digitsArr[digitsArr.length - 1]) === 5 ) {
    return false
  }
  else {
    return true
  }
}

// Best solution
function isPrime2 (num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
  if(num % i === 0) return false; 
  return num > 1;
}

console.log(isPrime2(1682914631))
