
// falsy values --> false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// Truthy values --> "0", 'false', " ", [], {}, function(){}, 



// check empty array
const arr = [];
if(arr.length === 0){
    console.log("Array is empty");
}

// check empty object
const obj = {};
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}

// false == 0 // return true
// false == '' // return true
// 0 == '' // return true

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 18
// val1 = undefined ?? 110
// val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

