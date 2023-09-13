let data=fetch("https://kontests.net/api/v1/all")
data.then((response)=>{
    return response.json();
}).then((value)=>
{
<<<<<<< HEAD
    console.log(value)
})


/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }
=======
    for(item in value)
    {
        console.log(value[item]["name"]);
    }
})
>>>>>>> 1fd10acc11ee42b1c79ab4484479b13cb9c54abc
