// callbacks are functions that are passed into other functions as arguments

// synchronus programming is when the code is executed line by line

let a=prompt("Enter your name");
let b=prompt("Enter your age");
console.log(a+"'s age is  " +b);


// asynchronous programming is when the code is not executed line by line

console.log("Before");
setTimeout(function() {
    console.log("Hello");
}, 2000);
console.log("After");


// callback function is a function that is passed into another function as an argument and is executed inside that function 

function greet(name, callback) {
    console.log("Hi" + " " + name);
    callback();                  // callback function is called
}

function callMe() {
    console.log("I am callback function");
}

greet("surya", callMe);


function hello(src,callback)
{
    let script=document.createElement("script");
    script.src=src;
    script.onload=function()
    {
        console.log("started downloading "+src);
        callback(null,src);
    }
    script.onerror=function()
    {
        console.log("error downloading "+src);
        callback(new Error("could not download "+src));
    }   
    //error handling
    document.body.appendChild(script);
    
}
function open(error,src)
{
    if(error)
    {
        console.log("could not open "+src);
        return;
    }
    console.log("opened "+src);
}

hello("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",open)