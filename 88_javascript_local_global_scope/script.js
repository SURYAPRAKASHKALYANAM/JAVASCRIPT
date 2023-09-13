//local and global 
// let a=8
{
    let a=9 // block scope cant access out 
    console.log("inside " + a)
}
console.log(a) // undefined 
{
    var a=9 // global scope
}
console.log(a)

// function scope
function f1()
{
    let a=9 // function scope oR VAR
    console.log("inside F" + a)
}
f1()