
// Global and Local Scope

let a = 10;
const b = 2;
var c = 12;
// console.log(a);
// console.log(b);
// console.log(c);

// scope {}
{
    let a = 109;
    const b = 52;
    var c = 162;
    // console.log("Inner  a : ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

// lecture 22

function one(){
    const username = "chandan" // closer concept

    function two(){
        const website = "www.gyancoding.com"
        // console.log(username)
    }
    // console.log(website);
    two();
}
one();

if(true){
    const username = "chandan"
    if(username === "chandan"){
        const website = "youtube.com"
        // console.log(username + website);
    }
    // console.log(website)
}
// console.log(username);

// +++++++++ Instrating +++++++++++

console.log(addOne(5)) // phle bhi call kr skte hai jb normal function bnate hai

function addOne(num){
    return num+1
}

// concept of hosting

addTwo(5) // expiration wala trika se phle call nhi kr skte hai
// expiration wala function 
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))