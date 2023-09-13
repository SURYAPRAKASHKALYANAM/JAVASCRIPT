// fetch api

// request headers
// let p=fetch("https://goweather.herokuapp.com/weather/Ny",{
//     headers:{
//         "Content-Type":"application/json"
//     }    
// })

let p=fetch("https://goweather.herokuapp.com/weather/Ny")

p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((value)=>{
    console.log(value)
})




