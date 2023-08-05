// dom example
var h1 = document.getElementById("mainTitle");
h1.style.color = "black";
h1.style.backgroundColor = "yellow";
h1.style.border = "2px solid black";
h1.style.padding = "10px";
h1.style.textAlign = "center";

//  childre and parent in javascript dom means parent is the element which is above the element and child is the element which is below the element 
//  parent node
// console.log(h1.parentNode); // this will give you the parent node of h1 element 

console.log(document.body.firstChild); // this will give you the first child of the document
console.log(document.body.lastChild); // this will give you the last child of the document
let array = Array.from(document.body.childNodes); // this will convert the child nodes into array
console.log(array);

