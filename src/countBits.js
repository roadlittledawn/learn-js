var num = 5
function countBits(num) {
  console.log(`bitcode: ${num.toString(2)}`)
return num.toString(2)
.split('')
.reduce((accum, curr) => {
  var accumNumber = parseInt(accum, 10);
  var currNumber = parseInt(curr)
  return accumNumber + currNumber
},0)
}
console.log(countBits(5))
