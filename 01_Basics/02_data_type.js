"use strict" // treat all javascript code as newer version.

// alert("I am alert") // Error when we use node js, but use browser not error

// console.log(3 + 3); console.log("GyanCoding");
// code readablity that should be high

// Javascript is a dynamic typing language. 

// Premitive Data Type (7 types ) --> set of basic data type in javascript.

let score = 12; // number
let firstName = "Rahul"; // string
let value = BigInt(19978934937439); // bigint
let isLoggedIn = true; // boolean
let id = Symbol("123"); // symbol (unique)
let temperature = null; // null (standalone value)
let gameOver = undefined; // undefined (value not assign)
// undefined apne aap me undefined type ka hai but null yek object hai

console.table([typeof score, typeof firstName, typeof value, typeof isLoggedIn, typeof id, typeof temperature, typeof gameOver]);


// Non Premitive (Reference) Data Type

const student = ["Aman", "Roshan", "Amit"];   // Array

const myObj ={
    name: "Aman",
    age: 33,
}; //Objects

let myFunction = function(){
    console.log("Hello Aman");
};  // Function