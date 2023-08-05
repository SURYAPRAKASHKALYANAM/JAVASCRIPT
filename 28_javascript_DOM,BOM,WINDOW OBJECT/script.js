// read age and print whether he can drive or not using alert   
let age=Number.parseInt(prompt("Ente your age"));
if(age<0)
{
    console.error("age can not be negative");
}
if(age<18)
{
    alert("You can NOT DRIVE");
}
else    
{
    alert("You can DRIVE");
}

// 2 use confirm 

let confirmation=confirm("Are you want prompt  again");
if(confirmation)
{
    let age=Number.parseInt(prompt("Ente your age"));
    if(age <0) 
    {
        console.error("age can not be negative");
    }
    if(age<18)
    {
        alert("You can NOT DRIVE");
    }
    else    
    {
        alert("You can DRIVE");
    }
}
