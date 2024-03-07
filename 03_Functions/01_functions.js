
// Create Function: myFun() ;

function myFun(){ // Function definition
    console.log("C");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("d");
    console.log("a");
    console.log("n");
}
// myFun; // Function reference
// myFun(); // Function execution , Function calling

function addTwoNumbers(num1, num2){ // parameter
    const sum = num1 + num2;
    // console.log(sum);
}

// addTwoNumbers(2, 5);
// addTwoNumbers(2, "5");
// addTwoNumbers(2, null);
// addTwoNumbers(2, "a"); // argument

// const returnfun  = addTwoNumbers(1, 2);
// console.log(returnfun); // undefined because no return

function addTwoNumbers(num1, num2){ 
    // const sum = num1 + num2;
    // return sum;
    return num1 + num2
    // console.log('Unreachable code'); // use before return
}
const returnfun  = addTwoNumbers(1, 2);
// console.log(returnfun);


// function loginUserMessage(username = "defalutValue"){ // defult value
//     return `${username} just logged in`
// }

function loginUserMessage(username){
    if(username === undefined){
        console.log("plese enter user name");
        return 
    }
    return `${username} just logged in`
}
// loginUserMessage("chandan");
// loginUserMessage();
// console.log(loginUserMessage("chandan"));