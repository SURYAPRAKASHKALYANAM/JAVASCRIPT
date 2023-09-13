// method overriding

class Employe{
    constructor(){
        console.log("Employees constructor")
    }
    login(){
        console.log("Employe login");
    }
    logout()
    {
        console.log("Employe logout");
    }
    requestLeaves(leaves)
    {
        console.log(`Employe requesting ${leaves} leaves`);
    }
}

class Programmer extends Employe{
    constructor(){
        super() // must call super 
        console.log("Programmers constructor")
    }
    requestcoffee(x)
    {
        console.log(`Programmer requesting ${x} coffees`);
    }
    // overriding
    requestLeaves(leaves)
    {
        if(confirm("do you want another leave"))
        console.log(`Programmer requesting ${leaves+1} leaves`);
        else super.requestLeaves(leaves)
    }
}

let e=new Employe()
e.login()
e.logout()
e.requestLeaves(5)

let p=new Programmer()
p.login()
p.logout()
p.requestLeaves(10)
p.requestcoffee(5)

