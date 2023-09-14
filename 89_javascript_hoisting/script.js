// Hoisting

greet()
function greet()
{
    console.log("good morning")
}


console.log(a)

var a=2 // declaration will  done at top but ot initialization

console.log(a)

// hoisting with let

// console.log(aa) // error arises 

let aa=2 

console.log(aa)

 // function expressions not hoisted
// greet1() // gives error
 let greet1=function()
 {
    console.log("good morning again")
 }
 greet1() // no error 

// hoisting class
// let o=new Rectangle() // shows error
class Rectangle{
    constructor()
    {
        this.l=9
        this.b=8
        console.log("created")
    }
    area()
    {
        console.log(this.l*this.b)
    }
}
let o=new Rectangle()
o.area()

//  In JavaScript, Hoisting is the default behavior of moving all 
// the declarations at the top of the scope before code execution.
//  Basically, it gives us an advantage that no matter where functions and variables (not function expressions and let const values) are declared,
//  they are moved to the top of their scope regardless of whether their scope is global or local.




