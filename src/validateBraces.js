//  https://www.codewars.com/kata/valid-braces/train/javascript

const {log} = console

// My solution
// Does not validate. 1 error
function validBraces(braces) {
  let pieces = braces.split("")
  if (pieces.length % 2 !== 0) {
    return false
  } else {
      for (let i = 0; i < pieces.length / 2; i += 1) {
        let rightCursor = (pieces.length - 1) - i
        if (pieces[i] === "{" && (pieces[rightCursor] !== "}" && pieces[i+1] !== "}") ) {return false}
        if (pieces[i] === "[" && (pieces[rightCursor] !== "]" && pieces[i+1] !== "]") ) {return false}
        if (pieces[i] === "(" && (pieces[rightCursor] !== ")" && pieces[i+1] !== ")") ) {return false}
      }
      return true
  }
}

// Best practices
function validBraces2(braces) {
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

function validBraces3(braces){
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g,"")
  }
  return !braces.length;
 }

  
  console.log( validBraces3("[({})](]") )
  