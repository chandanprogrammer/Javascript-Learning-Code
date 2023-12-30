const user = {
    username: "chandan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // {} in node but in browser windows object

function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.gretting = function(){
        console.log(`welcome ${this.username}`);
    }

    // return this;
}

// const userOne = User("chandan", 23, true);
// const userTwo = User("youtube", 11, false);

// console.log(userOne);

const userOne = new User("chandan", 23, true); 
// new keyword create empty object 
// constructor function call new keyword ke karan
// this ka argument add
// return kar deta hai this par this linkhna jruri nhi by defalut this return kar deta hai
const userTwo = new User("youtube", 11, false);

console.log(userOne);
console.log(userTwo);

console.log(userTwo.constructor);

// instanceOf 