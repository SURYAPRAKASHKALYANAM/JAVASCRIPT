
setTimeout(function() {
console.log("Hacking wifi....");
}, 1000);
try{
    console.log(rahul); // error is thrown here and the program stops here 
}
catch(err){    
    console.log("Error is handled here....");
    console.log(err);
}

// try cath handles only syncronous code and not asyncronous code 
// so the below code will not be handled by try catch
try{
    setTimeout(function() {
        console.log("Hacking wifi...."+rahul);
    }, 1000);
}
catch(err){
    console.log("Error is handled here....");
    console.log(err);
}

// use try catch inside the async function to handle async code

try
{
    setTimeout(function() {
        try{
            console.log("Hacking wifi...."+rahul);
        }
        catch(err){
            console.log("1Error is handled here....");
            console.log(err);
        }
    }, 1000);
}
catch(err){
    console.log("Error is handled here....");
    console.log(err);

}


setTimeout(function() {
    console.log("Fetchig user name and password....");
}, 2000);


setTimeout(function() {
        console.log("Hacking your Facebook id....");
}, 3000);

setTimeout(function() {
    console.log("Username and Password of Rahul (+91 5559533654) (Key@123)/.......");
}, 4000);

setTimeout(function() {
    console.log("Hacking wifi....");
}, 5000);

