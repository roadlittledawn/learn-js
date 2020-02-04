// https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript

// My solution

function rgb(r, g, b){
  var hexArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  var hexValue = [];
  for (var i = 0, j = arguments.length; i < j; i++) {
    arguments[i] > 255 ? arguments[i] = 255 : arguments[i]
    arguments[i] < 0 ? arguments[i] = 0 : arguments[i]
    var firstVal = Math.floor(Math.abs(arguments[i]) / 16)
    var secondVal = (arguments[i] / 16 % 1) * 16
    hexValue.push(hexArr[firstVal])
    hexValue.push(hexArr[secondVal])
  }
  return hexValue.join('');
}

// Best solution

function rgb2(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
  
  console.log(rgb2(32, 123, 12))
  