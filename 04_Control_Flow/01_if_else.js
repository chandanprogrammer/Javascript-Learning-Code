
// if(true){
//     code here ...
// }

// < , > , <=, >=, ==, !=, ===, 

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
if (temperature === 40) {
    console.log("Temperature is 40");
} else {
    console.log("Temperature is not 40");
}

let balance= 1000;
if(balance > 500) console.log("greater than 500"); // Implicit scope 

if(balance > 500) console.log("other : greater than 500"), console.log("test");

if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("More than 1000");

}