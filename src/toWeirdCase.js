//  https://www.codewars.com/kata/weird-string-case/train/javascript

const {log} = console

// My solution
// Actually a little shorter than best practice :)

function toWeirdCase (string) {
  return string.split(" ").map((word)=>{
    return word.split("").map((char,index)=> (index % 2 === 0) ? char.toUpperCase() : char.toLowerCase()).join("")
  }).join(" ")
}

// Best practice

function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}
  
console.log( toWeirdCase('This is a test') )
// console.log( toWeirdCase2('This is a test') )
