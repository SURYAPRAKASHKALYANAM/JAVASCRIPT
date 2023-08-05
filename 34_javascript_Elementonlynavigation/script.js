const ChangeBodyRed=(a)=>
{
    a.style.color="red";
}


let b=document.body
console.log("first child of b is",b.firstChild); // this will give you the first child of the body like text,comment,element
console.log("first element child of b is",b.firstElementChild); // this will give you the first element child of the body like h1,p,div but not text and comment
ChangeBodyRed(b);