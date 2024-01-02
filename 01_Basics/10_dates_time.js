const myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate); // object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(myDate.getDate());

// const myCreatedDate = new Date(2023, 0, 23);
// const myCreatedDate = new Date(2023, 7, 31, 5 , 3, 54);
// const myCreatedDate = new Date("2023-04-23");
const myCreatedDate = new Date("04-23-2023");
// console.log(myCreatedDate.toString());

const myTimeStamp = Date.now();
// console.log(myTimeStamp); // value in ms
// console.log(Math.floor(Date.now()/1000)); // change in second

const newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getTime());
// console.log(newDate.toLocaleString('default', { weekday: 'long'}));