function inchesToFeet (inches) {
  return `${Math.floor(inches / 12)} ft ${inches % 12} inches`
}

console.log (inchesToFeet(321))
