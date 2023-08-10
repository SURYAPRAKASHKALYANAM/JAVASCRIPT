// 

const loadScript=(src)=>{
        return new Promise((resolve,reject)=>{
        let script=document.createElement("script");
        script.type="text/javascript";
        script.src=src;
        document.body.appendChild(script);
        script.onload=()=>{
                resolve(src);
        }
        script.onerror=()=>{
                console.log("error loading "+src); 
                reject(0);
        }
        })
}
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
let p1=loadScript(src)

// p1.then((src)=>{
//         console.log("loaded "+src);
// },(error)=>{console.log(error);})

p1.then((src)=>{
        console.log("loaded "+src);
        return loadScript("https://code.jquery.com/jquery-3.6.0.min.js");
}).then((src)=>{ 
        console.log("loaded "+src);
}).catch((error)=>{
        console.log(error);
})        