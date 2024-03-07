
function calculateCartPrice(val1, val2, ...num1){ //rest operator
    return num1
}
// function calculateCartPrice(...num1){ //rest operator
//     return num1
// }

// console.log(calculateCartPrice(200, 300, 40, 290, 600)); // Eg: calculate cart total price


const user = {
    name: "chandan",
    price : 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject({ 
//     name : "demo",
//     price: 299
// }); // direct object pass


const newArray = [200, 400, 500];

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([300, 500, 3])); // direct array pass