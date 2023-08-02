// output of console.log("surya\"".length)

console.log("surya\"".length);

// example for includes method
let sentence="The quick brown fox jumps over the lazy dog.";
let word="fox";
console.log(sentence.includes(word));
console.log(sentence.includes("fox",15)); //searches from the 15th index

// example for startsWith method and endsWith method
let name = "surya";
console.log(name.startsWith("s"));
console.log(name.endsWith("a"));

// converting string to lower case and upper case
let name1 = "surya";
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());

// extract amount from string
sentence="please give me rs 1000";
console.log(sentence.slice("please give me rs ".length));
// type of slice method is string
// convert string to number
console.log(typeof(Number.parseInt(sentence.slice("please give me rs ".length))));


// change fourth character of string to capital
let name2 = "surya";
name2[4]=name2[4].toUpperCase(); // this will not work because strings are immutable in javascript 
console.log(name2); 

// to change fourth character of string to capital

name2 = name2.slice(0,4)+name2[4].toUpperCase()+name2.slice(5);
console.log(name2);
