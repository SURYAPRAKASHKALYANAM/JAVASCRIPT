// destructuring 

let arr = [2,3,4,5,6];
let [a,b,c,...k] = arr; // k will store rest of the elements and changes in k don't reflect in arr

k[0]=1
console.log(arr); // [2,3,4,5,6]
console.log(a,b,c,k);

let [a1, , ,...rest]=arr
console.log(a1,rest) // 3 4 will miss 

let obj = {
    name : "Rahul",
    age : 20,
    run : () => {
        console.log("self run");
    }
}
let{name:n,age=18,nk=20}=obj;//default value of age is set to be 18 if not provided in object
console.log(n,age,nk);

//spread operator

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = [...arr1,...arr2];
let obj1 ={...arr3}
console.log(obj1)
console.log(arr3)
// add arr4
let arr4=[1,2,3]
function sum(a,b,c)
{
    return a+b+c;
}
console.log(sum(...arr4)) // spread operator is used to pass array as argument to function

// rest operator
function sum1(...args)
{
    let sum=0;
    for(let i=0;i<args.length;i++)
    {
        sum+=args[i]
    }
    return sum;
}
console.log(sum1(1,2,3,4,5,6,7,8,9,10))


let obj2={
    name:"surya",
    company:"amazon",
    address:"XYZ"
}
console.log({...obj2,name:"prakash",address:5})  // name will change  address too..
console.log({name:"prakash",address:5,...obj2}) // nothing change