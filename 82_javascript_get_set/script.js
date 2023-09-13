// get , set ,instance of 

class Animal{
    constructor(name){
        this._name=name
    }
    walk()
    {
        console.log((this.name)+" is walking....")
    }
    get name(){
        return this._name
    }
    set name(newName)
    {
        this._name=newName
    }
    
}
class Rabit extends Animal{
    walk()
    {
        console.log((this.name)+" is jumping....")
    }
}
let a=new Animal("Jhon wick")
a.walk()
a.name="Roy" //set
a.walk()
let r = new Rabit("rab")
// instance of is used to check  whether the object is instance of class or not
console.log(a instanceof Animal)
console.log(r instanceof Animal)
console.log(r instanceof Rabit)
let c=5
console.log(c instanceof Animal)
// console.log(a.name)