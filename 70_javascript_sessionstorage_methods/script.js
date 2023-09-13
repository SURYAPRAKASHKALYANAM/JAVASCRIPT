// session storage
// important note
// session storage is similar to local storage
// the only difference is that, data is not persistent in session storage data is removed when the browser tab is closed or opened in another tab


// set 
sessionStorage.setItem('name', 'John');
sessionStorage.setItem('age', '30');
console.log(sessionStorage);

// get
let name = sessionStorage.getItem('name');
let age = sessionStorage.getItem('age');
console.log(name, age);

// remove
// sessionStorage.removeItem('name');
// sessionStorage.removeItem('age');
// console.log(sessionStorage);

// clear
// sessionStorage.clear();
// console.log(sessionStorage);



// JSON.parse() and JSON.stringify()
// JSON.parse() is used to convert string to object
// JSON.stringify() is used to convert object to string

// let obj = {
//     name: "harry",
//     age: 20,
//     type: "dangerous",
//     os: "ubuntu"
// }
// console.log(obj)
// console.log(typeof obj)
// let str = JSON.stringify(obj)
// console.log(str)
// console.log(typeof str)
// let obj2 = JSON.parse(str)
// console.log(obj2)
// console.log(typeof obj2)



 