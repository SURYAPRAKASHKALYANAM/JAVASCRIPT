// async function

async function myFunc() { 
    let p1= new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("27 degrees");
                }, 2000);   
            });

    let p2= new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("21 degrees");
                }, 5000);
            });
    // p1.then(alert);
    // p2.then(alert);
    console.log("1  fetching weather data....");
    let temp1 = await p1;
    console.log("fetched weather data...."+temp1);
    console.log("2  fetching weather data....");
    let temp2 = await p2;
    console.log("fetched weather data...."+temp2);
    return [temp1, temp2];

}

const cherry= async ()=>{
    console.log("cherry is waiting....");
}
const main=async()=>{
    let r=await myFunc();
        await cherry();
    console.log(r); 
} 
main();    
