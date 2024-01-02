// String is a object
// String are immutable not change origial string (stack)

// String are used to store and manupilate text

let name = "Chandan";
let roll = 12;
let course = 'BCA';
let message = `This "is" message`; // Template literals use bactics quotes

// console.log(name + roll + course); // Not Good practice

// console.log(`My name is ${name} and roll number is ${roll} from ${course}`); // string interpolation

// console.log(course[1]);
// console.log(name.__proto__); // to acees prototype -- console ke andar object dekh skte hai

const gameName = new String('GTA-v online game');
// console.log(gameName[2]);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());  
// console.log(gameName.toUpperCase()); 
// console.log(gameName.charAt(2)); 
// console.log(gameName.indexOf('A')); 
// console.log(gameName.split(" ")); // return array

// let newString = gameName.substring(0, 3); // Not negative starting value (last index not include)
// console.log(newString);
let anotherString = gameName.slice(-9, 6); // given negative starting value allowed (start reverse)
// console.log(anotherString);

let whiteSpace = "    blank page     ";
// console.log(whiteSpace.trim());
// console.log(whiteSpace.trimStart());
// console.log(whiteSpace.trimEnd());

const url = "https://www.gyancoding.com/videos/what%20is%20html";
// console.log(url.replace('%20', '-'));
// console.log(url.replaceAll('%20', '-'));

// console.log(url.includes('gyan')); // return true or false
// console.log(url.startsWith('https'));
// console.log(url.endsWith('html'));

const collegeName = "AM College";
// console.log(collegeName.charAt(2)); 
// console.log(collegeName.charCodeAt(4)); // Ascii value of character place at given index 
// console.log(collegeName.codePointAt(4));
// console.log(collegeName.concat([roll]));
// console.log(collegeName.indexOf("e"));
// console.log(collegeName.lastIndexOf('e'));
// console.log(collegeName.length);

console.log(collegeName.localeCompare(' '));
console.log(collegeName.match('e'));
console.log(collegeName.matchAll('e'));
console.log(collegeName.normalize("oll"));