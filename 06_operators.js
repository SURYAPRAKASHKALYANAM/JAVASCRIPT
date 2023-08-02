console.log("OPEATORS")

console.log("ARETHMETIC");
let a=45,b=4;

console.log("a+b:",a+b);
console.log("a-b:",a-b);
console.log("a/b:",a/b);
console.log("a*b:",a*b);
console.log("a**b:",a**b);
console.log("a%b:",a%b);
console.log("a++:",a++); //a=>46 but prints 45 
console.log("++a:",++a); // a=>47 prints 47

/*OPEATORS
a+b: 49
a-b: 41
a/b: 11.25
a*b: 180
a**b: 4100625
a%b: 1
a++: 45
++a: 47*/

console.log("ASSIGNMENT");
a=8;
a+=5
console.log(a); //13

// -=,*=,/=,%=,**= are other

console.log("COMPARISION");

let comp1=6,comp2=3;
console.log(comp1==comp2);

console.log(comp1!=comp2);

console.log(comp1===comp2);

console.log(comp1!==comp2);

console.log(comp1>comp2); //true

console.log(comp1<comp2); //false


// true  same value
// false
// true same type
// false  not same type

comp1=3,comp2="3";
console.log(comp1==comp2);

console.log(comp1!=comp2);

console.log(comp1===comp2);

console.log(comp1!==comp2);

// true // VALUE SAME
// false
// false  // THEY ARE DIFFERENT TYPE
// true

console.log("LOGICAL");

a=2,b=0;
console.log("a || b =",a||b);
console.log("a && b =",a&&b);
console.log("!a =",!a);
console.log("!b =",!b);

// LOGICAL
// a || b = 2
// a && b = 0
// !a = false
// !b = true