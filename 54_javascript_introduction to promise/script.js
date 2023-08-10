let promise=new Promise(function(resolve,reject)        
{
    alert("i am promise");
        resolve(56); // promise is resolved and 56 is passed as an argument to the function that is passed as an argument to then method 
});

console.log("Hello");
setTimeout(function() {
        console.log("Hi");
        }
        , 2000);
console.log("Bye");
console.log(promise); 
//promise is an object that is returned immediately when the promise is created and it has 3 states: pending, fulfilled, rejected 