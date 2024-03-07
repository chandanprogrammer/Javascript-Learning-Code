// Control Flow or Logic Flow
// Three types of conditional statements -->
// 1. if
// 2. if else
// 3. if else-if

// if(true condition){
//     code here ...
// }

// Compression Operator: < , > , <=, >=, ==, !=, ===, 

const isUserLogin = true;
if (isUserLogin) {
    console.log("user login");
}

if (2 == "2") {
    console.log("executed"); // executed
}
if (2 === "2") {
    console.log("executed"); // not executed
}

const temperature = 40;
// if else
if (temperature === 40) {
    console.log("Temperature is 40");
} else {
    console.log("Temperature is not 40");
}

let balance = 1000;
// Implicit scope 
if (balance > 500) console.log("greater than 500");

// if (balance > 500) console.log("other : greater than 500"), console.log("test"); // unreadable code

// if else-if
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
}
else {
    console.log("900 or More than 900");
}

const userLoggedIn = true;
const debitCard = true;

// Multiple condition check
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}