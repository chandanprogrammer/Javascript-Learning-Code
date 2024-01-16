const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros); // store in new variable and return new array
// console.log(allHeros);


// spred operator
const all_heors = [...marvel_heros, ...dc_heros]; // use more then two array
// console.log(all_heors);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, 8, [9, 10]]]; 
const realAnotherArray1 = anotherArray.flat(4);
const realAnotherArray2 = anotherArray.flat(Infinity); // spread out values
console.log(realAnotherArray1); 
console.log(realAnotherArray2);

console.log(Array.isArray("Hitesh")); // return true or false
console.log(Array.from("Hitesh")); // return in array
console.log(Array.from({name: "chandan"})); // return blank array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // convert in new array

