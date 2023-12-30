// let score = "12";

let score = true; 
// console.log(score, typeof score);

let scoreInNumber = Number(score);
// console.log(scoreInNumber, typeof scoreInNumber);

// "12abc" --> NaN (not a number)
// null --> NaN
// "" --> 0
// "chandan" --> NaN
// undefined --> NaN
// true --> 1
// false --> 0

let isLoggedIn = "";
// console.log(isLoggedIn, typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);

// 0 --> false
// 1 --> true
// null --> false
// undefined --> false
// "string" --> true
// "" --> false

let value = "";
console.log(value, typeof value);

let stringValue = String(value);
console.log(stringValue, typeof stringValue);

// 22 --> "22"
// null as object --> null as string

let num = 4;
let negativeNum = -num;

// console.log(negativeNum, typeof negativeNum);
