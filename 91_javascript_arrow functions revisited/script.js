// arrow functions

let f= name => console.log("Hello "+name)
f("surya")

const x={
    name:"surya",
    role:"Js Developer",
    exp:30,
    show:function(){
        setTimeout(
            ()=>{
                console.log(`the name is ${this.name}\nthe role is ${this.role}`)
            },2000)
    }
}

x.show()