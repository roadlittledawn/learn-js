// https://www.codewars.com/kata/playing-with-digits/train/javascript

// My solution

function digPow(n, p) {
  var numSumToPower = n.toString().split("").reduce( (acc,curr,index) => {
    return Math.pow(parseInt(curr),p+index) + parseInt(acc)
  }, 0)
  var divByN = numSumToPower / n
  return ( Number.isInteger(divByN) ) ? divByN : -1
}
 
  
  // Best solution

  function digPow2(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
  }
  
  console.log( digPow(46288, 3) )
  