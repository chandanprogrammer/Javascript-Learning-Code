// -> Variable is a container to store a value. 
// -> A variable is identified by a unique name called an identifier.
// -> During the execution of a JavaScript program, variables can be changed called dynamically type language. 
// -> The data type is defined during compile time and cannot be changed during runtime called statically typed language.
// -> Two types of variable scope :- local (functional or block) and global

// ---> Rules for choosing a variable name 
// 1. Contain letters, digits, underscores, and dollar signs
// 2. Must begin with a letter, underscore or dollar sign .
// 3. Names are case sensitive (code and CODE both are different)
// 4. Reserved words (like JavaScript keywords) cannot be used

// -> JavaScript Variables can be declared in 4 ways:- 
userName = "gyancoding"; // Automatically ( to written without let, const, var but not prefer to written this type. )
var userId = 1234; // Using var ( Not use var because of issue in scope.)
let userPassword = "Pass@123"; // Using let
const userEmail = "test@gmail.com"; // Using const ( Never change )

console.log(userId);
console.log(typeof(userEmail));
console.table([userName, userId, userPassword, userEmail]);

let score; // variable name only defined
score = 56; // variable declaring
console.log(score);
// -> score is identifer,  = is assignment operator, 56 is literal

{
    let score = 43; 
    console.log(score);
}
console.log(score);

// ----> var vs let vs const
// 1. var is use before ES6
// 2. var is globally scoped while let and const are block scoped.
// 3. var can be updated and re-declared 
// 4. let can be updated and not re-declared
// 5. const can be neither be updated and nor be re-declared
// 6. var and let can't be initialized during declaration compulsory
// const newEmail; // const must be initialized during declaration

userPassword = undefined;
console.log(userPassword);

// userEmail = "change@gmail.com"; // throws an error because constant can't be changed
// console.log(userEmail);