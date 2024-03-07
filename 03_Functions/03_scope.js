// Global and Local Scope

let a = 10;
const b = 2;
var c = 12;
d = 55;
// console.log(a); // 10
// console.log(b); // 2
// console.log(c); // 12
// console.log(d); // 55

// scope {}
{
    let a = 109;
    const b = 52;
    var c = 162;
    d = 42;
    // console.log("Inner  a : ", a); // 109
    // console.log("Inner  b : ", b); // 52
    // console.log("Inner  c : ", c); // 162
    // console.log("Inner  d : ", d); // 42
}

// console.log("Outer  a : ", a); // 109
// console.log("Outer  b : ", b); // 52
// console.log("Outer  c : ", c); //162
// console.log("Inner  d : ", d); // 42

// Code environment me node ke sath code ko access krte hai or jb windows (browser) me code ko access krte hai to global scope dono alag alag work krta hai.

function one(){
    const username = "chandan" // Closer concept

    function two(){
        const website = "www.gyancoding.com"
        // console.log(username)
    }
    // console.log(website); // Not access
    two();
}
one();

if(true){
    const username = "chandan"
    if(username === "chandan"){
        const website = "youtube.com"
        // console.log(username + website);
    }
    // console.log(website); // Not access
}
// console.log(username); // Not access

// +++++++++ Instrating +++++++++++

// console.log(addOne(5)) // phle bhi call kr skte hai jb normal function bnate hai

function addOne(num){
    return num+1
}

// Concept of Hosting

// console.log(addTwo(5)) // Expiration Function: Is trika se phle call nhi kr skte hai 

const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));