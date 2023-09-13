//inheritence nad extends
class Animal{
    constructor(name,color){
        this.name=name
        this.color=color
    }
    run()
    {
        console.log(this.name+" running....")
    }
    shout() {
        console.log(this.name + " shouting....")
    }
}

class Monkey extends Animal{
    eatBanana()
    {
        console.log(this.name+" eating banana....")
    }
}

let ani=new Animal("Bruno","white")
let m=new Monkey("chimpu","orange")

ani.shout() 
m.shout()
m.eatBanana()