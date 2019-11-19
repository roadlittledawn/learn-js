// https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript

const {log} = console

function sumStrings(str1, str2) {
  
  let sum = "";  // our result will be stored in a string.

  // we'll need these in the program many times.
  let str1Length = str1.length;
  let str2Length = str2.length;

  // if s2 is longer than s1, swap them.
  if(str2Length > str1Length ){
      let temp = str2;
      str2 = str1;
      str1 = temp;
  }

  let carry = 0;  // number that is carried to next decimal place, initially zero.
  let a;
  let b;
  let temp;
  let digitSum;
  for (let i = 0; i < str1.length; i++) {
      a = parseInt(str1.charAt(str1.length - 1 - i));      // get ith digit of str1 from right, we store it in a
      b = parseInt(str2.charAt(str2.length - 1 - i));      // get ith digit of str2 from right, we store it in b
      b = (b) ? b : 0;                                    // make sure b is a number, (this is useful in case, str2 is shorter than str1
      temp = (carry + a + b).toString();                  // add a and b along with carry, store it in a temp string.
      digitSum = temp.charAt(temp.length - 1);            //
      carry = parseInt(temp.substr(0, temp.length - 1));  // split the string into carry and digitSum ( least significant digit of abSum.
      carry = (carry) ? carry : 0;                        // if carry is not number, make it zero.

      sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;  // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.

  }

  return sum.replace(/^0+/, '');     // return sum
}

// Best practice

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings2(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}
  
console.log( sumStrings('00103', '08567') )
console.log( sumStrings('008493028493028903750392103', '89532089302843284390284930284012') )
