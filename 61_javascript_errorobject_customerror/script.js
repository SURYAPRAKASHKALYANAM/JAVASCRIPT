// error properties name, message, stack

// name: error name
// message: error message
// stack: error stack

try{
    console.log(surya);
    // throw new Error("This is custom error");
    throw new Error("This is custom syntax error");
    // throw new ReferenceError("This is custom ReferenceError error");
    // throw new TypeError("This is custom TypeError error");
    // throw new RangeError("This is custom RangeError error");
}
catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

