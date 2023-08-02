let age ="21";
age=Number.parseInt(age);
console.log(typeof age);
if(age>0 && age<=10) console.log("kid");
else if(age>10 && age<19) console.log("teen");
else console.log("above teen");


/// ternary statement

console.log("YOU CAN ",age<18 ? "NOT DRIVE":"DRIVE");