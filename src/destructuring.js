/// https://app.pluralsight.com/course-player?clipId=db2c63d2-4766-43a1-859a-e2a3afad58de

// Array
let carIds = [1,2,5]
let car1, remainingCars
[car1, ...remainingCars] = carIds

// console.log(car1, remainingCars)

// Object
let car = {id: 500, style: "convertible"}
let {id, style} = car

// console.log(id, style)

// If initializing variables and destructuring later, use ()
let bike = {size: 'L', type: "commuter"}
let size, type

({size, type} = bike)

// console.log(size, type)

// My own examples
