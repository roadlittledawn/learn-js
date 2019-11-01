// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

// My solution

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

console.log(isTriangle(1,2,2))