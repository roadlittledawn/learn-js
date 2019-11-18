//  https://www.codewars.com/kata/valid-braces/train/javascript

const {log} = console

// My solution
function validate(password) {
  return /^(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*\d{1,})\w{6,}$/gm.test(password);
}

// Best practices
// Mine was best practice.
  
  console.log( validate("Jfsd89402"))
  