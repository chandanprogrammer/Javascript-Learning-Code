let myArr = [3, 6, 7, 56];
// console.log(myArr);
// console.log(myArr.length);
// console.log(myArr.toString());

const nameArr = ["Chandan", "Raushan", "Rohit", "Pushpa", "Raghav", "Aman", "Suraj"];
// console.log(nameArr);
// console.log(nameArr[2]);
// console.log(nameArr.toString());

const numbers = new Array(1, 2, 3, 4);
// console.log(numbers);
// console.log(numbers[2]);

// Array Methods .........

// numbers.push(26);
// numbers.pop();
// numbers.unshift(12);
// numbers.shift();
// console.log(numbers);
// console.log(numbers.includes(74));
// console.log(numbers.indexOf(4));
// console.log(numbers.indexOf(47));

const newNumbers = numbers.join();
// console.log(numbers);
// console.log( typeof numbers);
// console.log(newNumbers);
// console.log(typeof newNumbers);

// slice splice
const myArr2 = [0, 1, 2, 3, 5, 8];
// console.log("A --", myArr2);
let myn1 = myArr2.slice(1, 3);
// console.log(myn1);
// console.log("B --", myArr2);
let myn2 = myArr2.splice(1, 3); // 
// console.log(myn2);
// console.log("C --", myArr2);

// Interview Question  ---> Different between slice and splice
// slice returns a piece of the array but it doesn't affect the original array. 
// splice changes the original array by removing, replacing, or adding values and returns the affected values.

// array declear in crome inspect and run array then see prototype