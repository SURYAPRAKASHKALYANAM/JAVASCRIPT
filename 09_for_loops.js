// for loops
console.log("for loops");
for(let i=0;i<50;i++)
{
    console.log(i);
}

// program to add first 10 natural numbers
let sum=0;
for(let i=1;i<=10;i++)
{
    sum+=i;
}
console.log("sum of first 10 natural numbers is "+sum);

//factorial of a number
let num=5;
let fact=1;
for(let i=1;i<=num;i++)
{
    fact*=i;
}
console.log("factorial of "+num+" is "+fact);


// for in loop
console.log("for in loop");
let obj={
    harry:90,
    shubh:45,
    rohan:78,
    golu:89
}
for(let key in obj)
{
    console.log(key+" "+obj[key]);
}

// for of loop
console.log("for of loop");
let arr=[1,2,3,4,5,6,7,8,9,10];
for(let element of arr)
{
    console.log(element);
}

// add all the elements of an array
let arr2=[1,2,3,4,5,6,7,8,9,10];
let sum2=0;
for(let element of arr2)
{
    sum2+=element;
}
console.log("sum of all the elements of an array is "+sum2);

//for of loop on string
let str="harry";
for(let char of str)
{
    console.log(char);
}

