// Stack (Primitive) --> copy bn ke jata hai varible me

let collegeName = "Am College";
let  changeCollegeName = collegeName;
changeCollegeName = "Gaya College"
console.log(collegeName);
console.log(changeCollegeName);

// Heap (Non-primitive) --> referance jata hai

let userOne = {
    name: "Chandan kumar",
    email: "chandan@gmail.com",
    upi: "906543kumar@ybl",
};
console.log(userOne.email);

let userTwo = userOne;
userTwo.email = "test@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);