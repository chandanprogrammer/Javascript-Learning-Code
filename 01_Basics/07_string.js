let name = "Chandan";
let roll = 12;
let course = 'BCA';
// console.log(course[1]);
// console.log(name + roll + course); // Not Good practice

// console.log(`My name is ${name} and roll number is ${roll} from ${course}`); // string interpolation

let fatherName = `Arun Kumar`; // Template literals use bactics quotes
// console.log(fatherName);

// console.log(name.__proto__); // to acees prototype -- console ke andar object dekh skte hai

const gameName = new String('GTA-v online game');
// console.log(gameName[2]);
// console.log(gameName.length);
// console.log(gameName.toLowerCase()); 
// console.log(gameName.toUpperCase()); 
// console.log(gameName.charAt(2)); 
// console.log(gameName.indexOf('A')); 
// console.log(gameName.split(" "));

// let newString = gameName.substring(0, 2); // not negative starting value
// console.log(newString);
let anotherString = gameName.slice(-9, 6); // given negative starting value allowed
// console.log(anotherString);

let whiteSpace = "    blank page     ";
// console.log(whiteSpace.trim());
// console.log(whiteSpace.trimStart());
// console.log(whiteSpace.trimEnd());

const url = "https://www.gyancoding.com/videos/what%20is%20html";
// console.log(url.replace('%20', '-'));
// console.log(url.replaceAll('%20', '-'));

// console.log(url.includes('gyan'));'


const collegeName = "AM College";
// console.log(collegeName.charAt(2)); 
// console.log(collegeName.charCodeAt(4)); // Ascii value of character place at given index 
// console.log(collegeName.codePointAt(4));
// console.log(collegeName.concat([roll]));
console.log(collegeName.endsWith("Chandan", 3));
// console.log(collegeName.includes("M C"));
// console.log(collegeName.indexOf("e"));
// console.log(collegeName.lastIndexOf('e'));
// console.log(collegeName.length);
console.log(collegeName.localeCompare(' '));
console.log(collegeName.match('e'));
console.log(collegeName.matchAll('e'));
console.log(collegeName.normalize("oll"));