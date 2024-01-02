// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-5)); // -ve number change +ve
// console.log(Math.round(46.7)); // 47
// console.log(Math.ceil(46.2)); // 47
// console.log(Math.floor(42.9)); // 42
// console.log(Math.sqrt(25));
// console.log(Math.min(4, 6, 8, 2));
// console.log(Math.max(4, 6, 8, 2));

console.log(Math.random()); // Number between 0 to 1
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 1;
const max = 6;
const dice =  Math.floor((Math.random()*(max-min+1)) + min)

console.log(dice);