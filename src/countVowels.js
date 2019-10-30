// https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript

// My solution

function getCount1(str) {
  var vowelsCount = 0;
  var vowelsArr = ['a','e','i','o','u']
  str.
  split('')
  .map(item => {
    if (vowelsArr.includes(item)) {
      vowelsCount += 1;
    }
  })
  return vowelsCount;
}


// Better solution
function getCount2(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

console.log(getCount2('asshole'))
