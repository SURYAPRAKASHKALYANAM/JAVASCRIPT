
let a=setTimeout(function() {
    console.log("Hello");
}, 2000);

console.log(a);

// clearTimeout(a); // stop the execution of setTimeout function

let b=setInterval(function() {
    console.log("HOLA");
}
, 2000);


// clearInterval(b); // stop the execution of setInterval function

const sum=(a,b)=>{
    console.log(a+b);
};

let bb=setInterval(sum, 2000, 5, 6); // 5 and 6 are arguments of sum function

// clearInterval(bb); // stop the execution of setInterval function