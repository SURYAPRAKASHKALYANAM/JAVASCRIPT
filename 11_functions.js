// functions
console.log("FUNCTIONS");
// add to numbers
let a=5,b=6;
console.log("sum of "+a+" and "+b+" is "+(a+b));
// average of two numbers
let a1=5,b1=6;
console.log("average of "+a1+" and "+b1+" is "+((a1+b1)/2));

// add two numbers using function
function add(a,b)
{ 
    return a+b;
}
console.log("sum of "+a+" and "+b+" is "+add(a,b));

// average of two numbers using function
function average(a,b)
{
    return Math.round(a+b)/2;
}
console.log("average of "+a1+" and "+b1+" is "+average(a1,b1));

//empty function
function empty()
{
    return;
}
console.log(empty());
//undefined

// anonymous function
let anonymous=function()
{
    return "hello";
}
console.log(anonymous());
//hello

// arrow function
let arrow=()=>{
    return "hello";
}
console.log(arrow());


// function inside function

function outer()
{
    console.log("outer function");
    function inner()
    {
        console.log("inner function");
    }
    inner();
}
outer();    
//outer function
//inner function

// arrow function inside function

function outer2()
{
    console.log("outer function");
    let inner2=()=>{
        console.log("inner function");
    }
    inner2();
}

outer2();
//outer function
//inner function

// arrow function to add two numbers
let add2=(a,b)=>{
    return a+b;
}
console.log("sum of "+a+" and "+b+" is "+add2(a,b));
//sum of 5 and 6 is 11  
