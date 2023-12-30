
const tinderUser = new Object()
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "someexample@gmail.com",
    fullname: {
        userfullname : {
            firstname : "chandan",
            lastname : "kumar"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.lastname);
// const {email} = regularUser // object de-strure
// const {email : e} = regularUser

// console.log(email);
// console.log(e);

const obj0 = {0: "a", 10: "b"}
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 3: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({} ,obj0, obj1, obj2) // {} --> target, and other all are source

// console.log(obj3);
// console.log(obj4);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// from server
const user = [
    {
        id: 1,
        name: "chandan"
    },
    {
        id: 2,
        name: "chandan"
    },
    {
        id: 3,
        name: "chandan"
    },
]
// console.log(user[1].name);

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)); // return array
// console.log(Object.values(tinderUser)); // return array
// console.log(Object.entries(tinderUser)); // return array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Json
// {
//     "id" : 123,
//     "name": "chandan",
// }

// [
//     {},
//     {}
// ]