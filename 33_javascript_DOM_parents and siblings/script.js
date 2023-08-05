// dom example
var h1 = document.getElementById("mainTitle");
h1.style.color = "black";
h1.style.backgroundColor = "yellow";
h1.style.border = "2px solid black";
h1.style.padding = "10px";
h1.style.textAlign = "center";

console.log(document.body.firstChild); // this will give you the first child of the document
let a = document.body.firstChild;
console.log(a.parentNode); // this will give you the parent node of the first child of the document
console.log(a.parentElement); // this will give you the parent element of the document
