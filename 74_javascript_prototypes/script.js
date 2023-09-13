// prototype

let a={
    name2:"Rahul",
    age:20,
    run:()=>
    {
        alert("self run")
    }
}

let p={
    run:()=>{
        alert("run")
    }
}

p.__proto__={
    name:"Jackie"
}

a.__proto__=p

console.log(a.name)
a.run()