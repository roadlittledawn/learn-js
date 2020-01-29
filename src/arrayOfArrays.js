// A New Relic hiring exercise to weed out initial candidates

var activities = [
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Play Game', 2],
    ['Sleep', 7]
];

function convertArrToObject(arr) {
  var obj = {}
  arr.map((value) => { obj[value[0]] = value[1] })
  return obj
}

console.log(convertArrToObject(activities))
