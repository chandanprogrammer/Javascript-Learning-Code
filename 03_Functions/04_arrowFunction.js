const user = {
    username: "chandan",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website. `); // Current contex ke liye "this" keyword use krte hai
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // {} empty object in node environment but in browser global object (known as window object) show

function chai() {
    let username = "chandan"
    // console.log(this.username); // undefined: Not use "this" keyword , only use "this" keyword in object
    // console.log(this); // When access inside function then some value display not empty object show
}
// chai()

const chai2 = function () {
    let username = "chandan"
    // console.log(this.username); // undefined
    // console.log(this); 
}
// chai2()

// ++++++++++++++++  Arrow Function  ++++++++++++++++

const chaiCode = () => {
    let username = "chandan";
    // console.log(this.username); // undefined
    // console.log(this); // {}
}
// chaiCode();

const addTwoNumber = (num1, num2) => {
    return num1 + num2;
}
// console.log(addTwoNumber(4, 7));

const addTwo = (num1, num2) => (num1 + num2); // inplict return 
// console.log(addTwo(3, 4));

// const fun = () =>  {username : "ck"}; // undefined

const fun = () =>  ({username : "ck"});
// fun();

