// write a program to print the marks of a student in an object
let obj={
    harry:98,
    rohan:70,
    akash:75
}
console.log(Object.keys(obj).length);
// //using for of loop
for(let i=0;i<Object.keys(obj).length;i++){
    console.log(obj[Object.keys(obj)[i]]);
}

//using for in loop
for(let key in obj){
    console.log(obj[key]);
}

// program to print  try again until the user enters the correct number
let casee=true;
let number=9;
while(casee){
    casee=Number.parseInt(prompt("enter the number"))==number?false:true;
    if(casee) console.log("try again")
}

// program to find mean of for numbers
const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4;
}
console.log(mean(1,2,3,4));