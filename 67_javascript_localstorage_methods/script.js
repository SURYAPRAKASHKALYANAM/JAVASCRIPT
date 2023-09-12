// local storage 

// note
// both keys and values must be strings
// if you want to store an object or array, you have to convert them into string


// set local storage item
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');
console.log(localStorage);
localStorage.setItem("check","true");

console.log(`value at check is ${localStorage.getItem('check')}`)

// get local storage  item
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);
localStorage.clear(); // clear all items from the browser's local storage

// remove local storege item
// localStorage.removeItem('name');
// localStorage.removeItem('age');
// console.log(localStorage);

// clear
// localStorage.clear()
// console.log(localStorage)

