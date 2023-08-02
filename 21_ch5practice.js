
// create an array of 5 elements and find the sum of all the elements using reduce method

let l=Number.parseInt(prompt("enter the lengthof the array"));
let arr=[]
while( l--){
    arr.push(Number.parseInt(prompt("enter the element")));
   
}   
let sum=arr.reduce((accumulator,element)=>
{
    return accumulator+element;
});
console.log(sum);

// keep adding elements to array untill 0 is added to array
let arr1=[];

while(true){
    let element=Number.parseInt(prompt("enter the element"));
    if(element==0){
        break;
    }
    arr1.push(element);
}
console.log(arr1);

// create an array of 5 elements and find the square of all the elements using map method
let arr2=[1,2,3,4,5];
let newarr2=arr2.map((element)=>
{   
    return element*element;
});
console.log(newarr2);

// create an array of 18 elements and filter out all the elements which are multiple of 10
let arr3=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

let newarr=arr3.filter((element)=>
{
    return element%10==0;
});
console.log(newarr);

// use reduce method to find factorial of a given number from an array of first n natural numbers n being the number whose factorial is to be found
let n=Number.parseInt(prompt("enter the number"));
let arr4=[];
for(let i=1;i<=n;i++){
    arr4.push(i);
}   
let factorial=arr4.reduce((accumulator,element)=>
{
    return accumulator*element;
}
);
console.log(factorial);

