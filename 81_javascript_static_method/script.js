// static method
// note 
// static method can be called without creating object
// static method can be called using class name
// static method cannot access instance members
// static method can access static members
// static method can't be called using object
class Animal{
    constructor(name,color){
        this.name=Animal.capitalize(name)
        this.color=color
    }
    walk()
    {
        console.log((this.name)+" walking....")
    }
    static capitalize(name)
    {
        return name.charAt(0).toUpperCase()+name.substr(1,name.length)
    }
}

let a=new Animal("jack","white")
a.walk()