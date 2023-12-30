
const user = {
    username: "chandan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website. `); // current contex ke liye "this" keyword use krte hai
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this); // {} empty object but browser me window object dikhega



function chai(){
    let username = "chandan"
    // console.log(this.username);
    // console.log(this);
}
// chai()

const chai2 = function (){
    let username = "chandan"
    // console.log(this.username);
    // console.log(this);
}
// chai2()


// Arrow function ---------------------
const chaiCode = () => {
    let username = "chandan"
    // console.log(this.username);
    // console.log(this);
}
// chaiCode()

// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }
// const addTwo = (num1, num2) =>  (num1 + num2) // inplict return

// console.log(addTwo(3, 4));


// const fun = () =>  ({username : "ck"})
    
// fun();

