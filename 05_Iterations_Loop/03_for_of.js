
// For of Loop
// for (const iterator of object) {

// }

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello Chandan kumar";

for (const greet of greetings) {
    console.log(greet);
}

// Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // not allowed dubblicate value

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":- ", value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for (const key of myObject) { // not allowed in case of object
//     console.log(key);
// }