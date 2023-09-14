// // clousers
mess="Good global"
function hello1()
{
    let mess="Good Morning"
    console.log(mess)
    let c=function(){
        console.log("c "+mess)
    }
    mess="check change" // changes
    return c // retuns function c with its environmental varibles(mess)
}
console.log(mess) // accees global
c=hello1()
c()


function returnfunc(){
    const x=()=>{
        let a=1
        console.log(a)
        const y=()=>{
            // let a=2
            console.log(a)
            const z=()=>
            {
                // let a=3
                console.log(a)
            }
            z()
        }
        a=222  //changes value in y and z functions 
        y()
    }
    return x
}

let x=returnfunc()
x()
