const a = async (text, n = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 1000 * n)
    })
}

let sum = (a, b, c) => {
    return a + b + c;
}
let arr = [1, 2, 3, 4, 5]
console.log(sum(...arr) / arr.length);

(
    async () => {
        let text = await a("Hello")
        console.log(text)
        text = await a("Surya")
        console.log(text)
    }
)();

(
    async () => {
        let t = await a("I am resolving after 4 seconds", 4)
        console.log(t)
        t = await a("I am resolving after 1 second", 1)
        console.log(t)
    }
)();

console.log((
    (p, t, r) => {

        return p * t * r / 100
    }
)(100, 100, 100))