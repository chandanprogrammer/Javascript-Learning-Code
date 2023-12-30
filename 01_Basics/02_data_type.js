"use strict" // treat all javascript code as newer version.

// alert("I am alert") // we use node js, not browser

// code readablity should be high

// Javascript is a dynamic typing language. 

// Premitive Data Type (7 types ) --> set of basic data type in javascript.

let score = 12; // number
let firstName = "Chandan"; // string
let value = BigInt(19978934937439); // bigint
let logIn = true; // boolean
let id = Symbol("123"); // symbol (unique)
let temperature = null; // null (standalone value)
let gameOver = undefined; // undefined (value not assign)

console.table([typeof score, typeof firstName, typeof value, typeof logIn, typeof id, typeof temperature, typeof gameOver]);

// undefined apne aap me undefined type ka hai

// Non Premitive (Reference) Data Type

const student = ["chandan", "roshan", "amit"];   // Array

const myObj ={
    name: "chandan",
    age: 23,
}; //Objects

let myFunction = function(){
    console.log("Hello Chandan");
};  // Function