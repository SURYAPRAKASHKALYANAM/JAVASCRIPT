// load javasript file usng promise 

// const loadscript=(src)=>
// {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//        let script=document.createElement("script");
//          script.src=src;   
//          script.type="text/javascript";
//          script.onload=()=>{
//                 resolve("script is loaded....");
//             }
//         script.onerror=()=>{
//                 reject("script is not loaded....");
//             }
//         document.head.append(script);
//     }, 2000);   
// });
// }
// src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
// let p1=loadscript(src);
// p1.then((data)=>{
//     console.log(data);
// },(err)=>{
//         console.log(err);
//     }
// );


// write above code using async await
// const loadscript1=async (src)=>
// {
//     return new Promise((resolve, reject) => {
//        let script=document.createElement("script");
//          script.src=src;   
//          script.type="text/javascript";
//          script.onload=()=>{
//                 resolve("script is loaded....");
//             }
//         script.onerror=()=>{
//                 reject("script is not loaded....");
//             }
//         document.head.append(script);   
// });
// }

// const main=async()=>{
//     src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
//     let p2=await loadscript1(src);
//     console.log(p2); 
// }
// main();   
// use promise which is rejected  after 3 seconds

// let fun=()=>{
//         let p1=new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject("rejected....");
//             },3000);
//         });
//         return p1;
// }

// let a=async ()=>{
//     try
//     {
//         let p1=await fun();
//         console.log(p1);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// a();



let p1=async ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved....");
        },3000);
    });
}

let p2=async ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1resolve....");
        },1000);
    });
}

let p3=async ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2resolved....");
        },2000);
    });
}

const run=async ()=>{
    console.time("time taken");
    // not parallel execution
    // let a1=await p1();
    // let a2=await p2();
    // let a3=await p3();
    // parallel execution
    let a1= p1();
    let a2= p2();
    let a3= p3();
    let a1a2a3=await Promise.all([a1,a2,a3]); // parallel execution
    // console.log(a1,a2,a3);
    console.log(a1a2a3);
    console.timeEnd("time taken");
}
run();


