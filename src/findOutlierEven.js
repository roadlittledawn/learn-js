// https://www.codewars.com/kata/iq-test/train/javascript

// My solution

function iqTest(numbers) {
  var numArr = numbers.split(' ');
  var even = numArr.filter(int => int % 2 == 0)
  var odd = numArr.filter(int => int % 2 !== 0)
  return (even.length === 1) ? numArr.indexOf(even[0]) + 1 : numArr.indexOf(odd[0]) + 1
}

// Best solution
function iqTest2(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

console.log(iqTest("2 4 7 8 10"))
