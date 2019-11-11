// https://www.codewars.com/kata/weight-for-weight/train/javascript

const {log} = console

// My solution
function orderWeight(str) {
  return str.trim().split(" ").sort( (a,b) => {
    var sumA = a.split("").reduce((accum, curr)=>{return parseInt(accum) + parseInt(curr)}, 0)
    var sumB = b.split("").reduce((accum, curr)=>{return parseInt(accum) + parseInt(curr)}, 0)
    if (sumA === sumB) {
      if (a > b) {
        return 1
      }
      if (a < b) {
        return -1
      }
      return 0
    } else {
      return sumA - sumB
    }
  }).join(" ")
}
  
  // Best solution


  
  console.log( orderWeight("94421 90 434589 51 216220 100 480093 31 494858 98 319595 189 386984 4 71638 196 350084 22 251505 101 17") )
  