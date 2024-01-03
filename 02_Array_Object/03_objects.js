
// or constructor se singleton object bnega
// Object.create

// literals se singleton nhi bnega 

const mySym = Symbol("key1");

const JsUser = {
    name : "chandan", // name bhi string hi hota hai
    "full name": "chandan kumar",
    mySym: "mykey1",
    [mySym]: "mykey2", // [] refer to symbol
    age: 18,
    location : "Bihar",
    email: "chandan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);

// console.log(JsUser.full name);
// console.log(JsUser["full name"]);

// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


// console.log(JsUser.email);
JsUser.email = "change-email@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "again-change-email@gmail.com";
// console.log(JsUser);

JsUser.gretting = function(){
    console.log("Hello Js User");
}

// console.log(JsUser.gretting) // function return back
console.log(JsUser.gretting())


JsUser.grettingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); //`` string interpulation
}

console.log(JsUser.grettingTwo())