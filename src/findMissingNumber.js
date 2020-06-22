// From https://hackernoon.com/50-data-structure-and-algorithms-interview-questions-for-programmers-b4b1ac61f5b0

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function createArray () {
    var arr = []
    for (let i = 1; i < 101; i++) {
        arr.push(i)
    }
    arr.splice(getRandomInt(100), 1)
    return arr
}

function findMissingNumber(arr) {
    var missingNumbers = []
    for (let i = 1; i < arr.length; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(arr[i])
        }
    }
    return missingNumbers
}

console.log(findMissingNumber( createArray() ) )