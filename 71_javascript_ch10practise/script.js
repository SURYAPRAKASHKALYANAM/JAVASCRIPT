let data=fetch("https://kontests.net/api/v1/all")
data.then((response)=>{
    return response.json()
}
).then((value)=>
{
    console.log(value)
})
