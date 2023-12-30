
// myFun();

function myFun(){
    console.log("C");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("d");
    console.log("a");
    console.log("n");
}

// myFun();

function addTwoNumbers(num1, num2){ // parameter
    const sum = num1 + num2;
    // console.log(sum);
}

// addTwoNumbers(2, 5);
// addTwoNumbers(2, "5");
// addTwoNumbers(2, "a"); // argument

// const returnfun  = addTwoNumbers(1, 2);
// console.log(returnfun);

function addTwoNumbers(num1, num2){ // parameter
    // const sum = num1 + num2;
    // return sum;
    return num1 + num2
}
const returnfun  = addTwoNumbers(1, 2);
// console.log(returnfun);


// function loginUserMessage(username = "defalutValue"){
//     return `${username} just logged in`
// }

function loginUserMessage(username){
    if(username === undefined){
        console.log("plese enter user name");
        return 
    }
    return `${username} just logged in`
}
loginUserMessage("chandan");
loginUserMessage();
console.log(loginUserMessage("chandan"));