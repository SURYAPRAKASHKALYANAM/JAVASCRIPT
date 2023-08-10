let p1=new Promise(function(resolve,reject)
{
        setTimeout(function()
        {
                // alert("p1 is resolved");
                resolve(1);
        },2000);
});

p1.then(()=>{
        console.log("hurray this promise is resolved"); 
        return new Promise(function(resolve,reject)
        {
                setTimeout(function()
                {
                        resolve(2);
                },2000);
        }
        )
}).then((value)=>{ console.log(value," hurray this promise is resolved");})

p1.then((value)=>{
        console.log(value," congartulations this promise is resolved");
})

