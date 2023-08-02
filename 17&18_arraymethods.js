console.log("array methods");

let marks = [34,23,24,93,73,25,63];
console.log(marks);

// push method
marks.push(45); // adds element at the end of array and returns length of array
console.log(marks);

// pop method
marks.pop(); // removes element from the end of array and returns the removed element
console.log(marks);

// unshift method
marks.unshift(45); // adds element at the beginning of array and returns length of array
console.log(marks);

// shift method
marks.shift(); // removes element from the beginning of array and returns the removed element
console.log(marks);

// splice method
marks.splice(1,3); // removes 3 elements from index 1 and returns the removed elements
console.log(marks);

// reverse method
marks.reverse(); // reverses the array and returns the reversed array
console.log(marks);

// // concat method
let marks2 = [1,2,3,4,5];
marks = marks.concat(marks2); // concatenates marks2 array to marks array and returns the concatenated array
console.log(marks);

// sort method
marks.sort(); // sorts the array in ascending order of alphabets 
console.log(marks);

// sort method with compare function
marks.sort(function(a,b){return a-b}); // sorts the array in ascending order 
console.log(marks);

//reverse sort method with compare function
marks.sort(function(a,b){return b-a}); // sorts the array in descending order 
console.log(marks);

// indexOf method
console.log(marks.indexOf(34)); // returns index of element 34 if present in array else returns -1

//delete method
delete marks[0]; // deletes element at index 0 and sets it to undefined
console.log(marks);


// concat three arrays
let marks3 = [1,2,3,4,5];
let marks4 = [6,7,8,9,10];
let marks5 = [11,12,13,14,15];
marks3 = marks3.concat(marks4,marks5);
console.log(marks3); 