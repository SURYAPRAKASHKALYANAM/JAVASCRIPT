// check age lies between 10 and 20

let age=57,age2=87,age3=15;

if(age<20 && age>10) console.log("age lies lies between 10 and 20");
if(age2<20 && age2>10) console.log("age2 lies lies between 10 and 20");
if(age3<20 && age3>10) console.log("age3 lies lies between 10 and 20");
//age3 lies lies between 10 and 20

// use of swith case
let product="jeans";
switch(product)
{
    case "jeans":
        console.log("jeans cost rupees 4000");
        break;
    case "shirts":
        console.log("shirts cost rupees 4000");
        break;
    case "tshirts":
        console.log("tshirts cost rupees 4000");
        break;
    default:
        console.log("product not available");

}

// divisible by 2 and 3
// this code 
let num=6;
if(num%2==0 && num%3==0)
{
    console.log("divisible by 2 and 3");
}
else console.log("NOT DIVISBLE BY 2 AND 3");

// divisible by 2 and 3
// this code 
num=6;
if(num%2==0 || num%3==0)
{
    console.log("divisible by 2 OR 3");
}
else console.log("NOT DIVISBLE BY 2 OR 3");
