// promise api 
// promise is an object that may produce a single value some time in the future 
// either a resolved value or a reason that it's not resolved (rejected)
// a promise may be in one of 3 possible states: fulfilled, rejected, or pending
// promise api is used to handle asynchronous operations in javascript

// promise constructor
// syntax: new Promise(executor);
// executor: a callback function with the signature function(resolve, reject) { ... }
// resolve: a callback function that resolves the promise
// reject: a callback function that rejects the promise 
// the executor normally initiates some asynchronous work, and then, once that completes, 
// either calls the resolve function to resolve the promise or else rejects it if an error occurred
// if an error is thrown in the executor function, the promise is rejected
// the return value of the executor is ignored

// promise instance methods
// then: appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler
// catch: appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled
// finally: appends a handler to the promise, and returns a new promise which is resolved when the original promise is resolved
// all: returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises

let p1=new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
        resolve("success 1");  
        // reject(new Error("error 1"));

    },1000);  
});

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("success 2");
        reject(new Error("error 2"));
    },2000);
});

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{    
        resolve("success 3");
        // reject(new Error("error 3"));
    },3000);
});

// p1.then((result)=>{
//     console.log(result);
// });

// p2.then((result)=>{
//     console.log(result);
// }
// );

// p3.then((result)=>{
//     console.log(result);
// }
// );

// promise all
// all promises must be resolved for then to be executed if any one promise is rejected then catch will be executed

Promise.all([p1,p2,p3]).then((result)=>{    
    console.log(result);
});


// promise settleall
// all promises will be executed irrespective of whether they are resolved or rejected
Promise.allSettled([p1,p2,p3]).then((result)=>{        
    console.log(result);
});

Promise.race([p1,p2,p3]).then((result)=>{        
    console.log(result);
});


// promise.any
// returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected

Promise.any([p1,p2,p3]).then((result)=>{
    console.log(result);
});

// promise.resolve

// p2.resolve("success 1");

// promise.reject

// p2.reject(new Error("error 2"));