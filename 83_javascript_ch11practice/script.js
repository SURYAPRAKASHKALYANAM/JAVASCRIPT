class ComplexNumber{
    constructor(real,imaginary)
    {
        this._real=real
        this._imaginary=imaginary
    }
    add(c)
    {
        return new ComplexNumber(this._real+c._real,this._imaginary+c._imaginary)
    }
    display()
    {
        console.log(this._real+" + "+this._imaginary+"i")
    }
    get real()
    {
        return this._real
    }
    set real(newReal)
    {
        this._real=newReal
    }
    get imaginary()
    {
        return this._imaginary
    }
    set imaginary(newImaginary)
    {
        this._imaginary=newImaginary
    }
}

let c1=new ComplexNumber(2,3)
let c2=new ComplexNumber(4,5)
c1.display()
c2.display()
let c3=c1.add(c2)
c3.display()
c1.real=10
c1.imaginary=20
c1.display()


class Human{
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
    display()
    {
        console.log(this.name+" "+this.age)
    }
}

class Student extends Human{
    constructor(name,age,roll)
    {
        super(name,age)
        this.roll=roll
    }
    display()
    {
        console.log(this.name+" "+this.age+" "+this.roll)
    }
}

let h=new Human("Rahul",20)
h.display()
let s=new Student("Ravi",20,101)
s.display()
console.log(s instanceof Human)
