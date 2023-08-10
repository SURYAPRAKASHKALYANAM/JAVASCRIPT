let p1=new Promise(function(resolve,reject)
{
        console.log("p1 is running");
        setTimeout(function()
        {
                console.log("p1 is resolved");
                resolve(1);
        },2000);
});

let p2=new Promise(function(resolve,reject)
{
        console.log("p2 is running");
        setTimeout(function()
        {
                console.log("p2 is rejected");
                reject(new Error("p2 is rejected"));
        },2000);
});

p1.then((value)=>{
        console.log(value);
})

// then method is called on the promise object and it takes 2 functions as arguments:
// 1st function is called when the promise is resolved and 2nd function is called when the promise is rejected
// p1.then((value)=>{ console.log(value);},  
// (error)=>{
//         console.log(error);
// })

// catch method is called on the promise object and it takes 1 function as argument: error handling     
// p2.catch((error)=>{
//         console.log(error);
// }       
// )

p2.then((value)=>{ console.log(value);},
(error)=>{
        console.log(error);
})
console.log(p1);
console.log(p2);