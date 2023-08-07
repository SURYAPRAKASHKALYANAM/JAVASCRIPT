
let firstchild=document.getElementsByTagName("nav")[0];
firstchild.firstElementChild.style.color="red";
let lastchild=document.getElementsByTagName("nav")[0];
lastchild.lastElementChild.style.color="blue";

let litags=document.getElementsByTagName("li");
console.log(litags);

Array.from(litags).forEach(function(element){
    console.log(element);
    element.style.background="cyan";
}   );
