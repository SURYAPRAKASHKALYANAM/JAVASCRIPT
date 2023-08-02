// arrays
console.log("arrays");


let marks = [34,23,24,93,73,25,63];
console.log(marks);
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

// array of different data types
let myArray = ["surya",34,null,true];
console.log(myArray);
console.log(myArray[4]); // undefined

//change value of array
myArray[0]="surya prakash"; // this is possible because arrays are mutable in javascript
console.log(myArray);

// type of array
console.log(typeof(myArray)); // object