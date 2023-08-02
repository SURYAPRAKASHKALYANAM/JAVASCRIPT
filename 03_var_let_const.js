console.log("VAR-LET-CONST");
let a=45;
let  b="surya";
let  c=null;
let d=undefined;
// let is block scoped 
{
    let b="this";
    console.log(b);
}
console.log(b);
// prits this surya so use let 


//const

const author="surya";
// let author=5;   error : Identifier 'author' has already been declared
// author =5; TypeError: Assignment to constant variable.
// const aa; Missing initializer in const declaration