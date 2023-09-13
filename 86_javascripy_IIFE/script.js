// immediATELY InvokED funCTION expRESSION

let a =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)
        }, 2000);
    })
}

// let f = async () => {
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
// }
// f()

// immediately invoked fuction expression

(async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
})()
