// https://www.codewars.com/kata/find-the-parity-outlier/train/javascript

// My solution
function findOutlier(integers) {
  var oddIntegers = [], evenIntegers = []
  integers.filter( (num, index) => {
    (num % 2 === 0) ? evenIntegers.push(integers[index]) : oddIntegers.push(integers[index]);
  })
  return (evenIntegers.length === 1) ? evenIntegers[0] : oddIntegers[0]
}

// Better solution
function findOutlier2(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1 ? even[0] : odd[0];
}

console.log(findOutlier([2,6,8,10,3]))
