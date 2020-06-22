const arr = ['mars', 'venus', 'jupiter', 'mars', 'neptune', 'venus', 'earth'];

function removeDupesViaSet (array) {
    return [...new Set(array)]
}
console.log(removeDupesViaSet(arr))