const f=()=>{
            try{
                let a=0;
                // console.log(program);    
                console.log("program run successfully....")
                return ;  // finally block is always executed 
            }
            catch(err){
                console.log(err);
                console.log(p);
            }
            finally{        // finally block is always executed whether there is an error or not 
                console.log("finally block is always executed....");
                // finally block applications 
                // 1. to close the database connection
                // 2. to close the file connection
                // 3. to close the network connection
                // 4. to close the socket connection
            }
}
f();




