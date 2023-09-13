console.log(document.cookie)
document.cookie = "name=harry1122334400"
document.cookie = "name2=harry11223344002"
document.cookie = "name=harry"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)

// path in cookie
// document.cookie = "name=harry;path=/"
// document.cookie = "name2=harry2;path=/66_javascript_cookies"
// document.cookie = "name3=harry3;path=/66_javascript_cookies/script.js"
//
// domain in cookie
// document.cookie = "name=harry;domain=codepen.io"

// expires in cookie
// let date = new Date(Date.now() + 86400000)
// date = date.toUTCString()
// document.cookie = `name=harry;expires=${date}`
// document.cookie = `name2=harry2;expires=${date}`

// max-age in cookie
// document.cookie = `name=harry;max-age=100` 
// document.cookie = `name2=harry2;max-age=100`

// secure in cookie
// document.cookie = `name=harry;secure`
// document.cookie = `name2=harry2;secure`

// samesite in cookie
// document.cookie = `name=harry;samesite=strict`
// document.cookie = `name2=harry2;samesite=strict`

// httponly in cookie
// document.cookie = `name=harry;httponly`
// document.cookie = `name2=harry2;httponly`

// delete cookie
// document.cookie = `name=harry;max-age=0`

// get cookie
// console.log(document.cookie)

// get cookie by key
// let cookie = document.cookie.split(";")
// let cookieObj = {}
// cookie.forEach((element)=>{
//     let temp = element.split("=")
//     cookieObj[temp[0].trim()] = temp[1].trim()
// })

// console.log(cookieObj)

// console.log(cookieObj.name)

// console.log(cookieObj.name2)

