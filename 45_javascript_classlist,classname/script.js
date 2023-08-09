let a=document.getElementById("first");
// console.log(a);

a.classList.add("test");
console.log(a);

a.className='yellow text-dark';

a.classList.remove("test1"); // remove class test from classlist of a element 

a.classList.toggle("test"); // if class is present then remove it, if not then add it

a.classList.replace("test","test2"); // replace test with test2 if test is present in classlist of a element else do nothing

// console.log(a.classList.contains("test2")); // check if test2 is present in classlist of a element

console.log(a.classList.item(2)); // return class at index 0 in classlist of a element 

// a.className="";