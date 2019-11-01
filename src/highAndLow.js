// https://www.codewars.com/kata/highest-and-lowest/train/javascript

// My solution

function highAndLow(numbers) {
  var numArr = numbers.split(' ')
  .map((item) =>  {
    return item = +item
  })
  var max = Math.max(...numArr), min = Math.min(...numArr)
  return `${max} ${min}`
}

// Best practice solution

function highAndLow2(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))
