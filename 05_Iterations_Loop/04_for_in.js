
// For in loop

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
}

const arr2 = ["a", "b", "c", "d"]
for (const key in arr2) {
    // console.log(key);
    // console.log(arr2[key]);
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

// for(const key in map){ // not allowed in map function
//     console.log(key);
// }