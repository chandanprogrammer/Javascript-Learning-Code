// Array is a object, it can many values under a single name.
// Array are mutable.
// Javascript array are mixed data type
// Javascript array value can be change 
// Javascript array re-sizeable
// Javascript array copy operations create shallow copies (that means whose properties share the same references point).


let myArr = [3, 6, 7, 56];
// console.log(myArr);
// console.log(typeof myArr);
// console.log(myArr.length); // return length of array
// console.log(myArr.toString());

const nameArr = ["Chandan", "Raushan", "Rohit", "Pushpa", "Raghav", "Aman", "Suraj"];
// console.log(nameArr);
// console.log(nameArr[0]);
// console.log(nameArr[2]);
// console.log(nameArr.toString());

const numbers = new Array(1, 2, 3, 4); // Another method to declear array
// console.log(numbers);
// console.log(numbers[2]);

// Array Methods -------------->

// numbers.push(26);
// numbers.pop();
// numbers.unshift(12);
// numbers.shift();
// console.log(numbers);
// console.log(numbers.includes(74)); // return true or false (boolean data type)
// console.log(numbers.indexOf(4));
// console.log(numbers.indexOf(47)); // return -1

const newNumbers = numbers.join(); // bind and change in string data type
// console.log(numbers);
// console.log( typeof numbers);
// console.log(newNumbers);
// console.log(typeof newNumbers);

// slice splice
const myArr2 = [0, 1, 2, 3, 5, 8];
// console.log("A --", myArr2);
let myn1 = myArr2.slice(1, 3); //  3rd index not include
// console.log(myn1);
// console.log("B --", myArr2);
let myn2 = myArr2.splice(1, 3); // 3rd index include
// console.log(myn2);
// console.log("C --", myArr2);

// Interview Question  ---> Different between slice and splice
// slice returns a piece of the array but it doesn't affect the original array. 
// splice changes the original array by removing, replacing, or adding values and returns the affected values.

// array declear in crome inspect and run array then see prototype

