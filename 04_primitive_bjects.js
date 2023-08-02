console.log("4. PRIMITIVE DATA TYPES AND OBJECTS");
// n n b b s s u

let a=null;
let b=333;
let c=true;
let d=BigInt("567")+BigInt("3");
let e="surya";
let f=Symbol("I AM A SYMBOL");
let g=undefined;  // let g same
console.log(a,b,c,d,e,f,g);
console.log(typeof c);

// 4. PRIMITIVE DATA TYPES AND OBJECTS
// null 333 true 570n surya Symbol(I AM A SYMBOL) undefined
// boolean

//OBJECTS 
// similar to dictionary ,key value pairs
const item=
{
    "surya":true,
    "kalyanam":false,
    "prakash":7
}

console.log(item["surya"]); //true
console.log(item["random"]) //undefined 