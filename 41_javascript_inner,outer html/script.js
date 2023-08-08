let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0] // y is a reference to the same object as x is 
console.dir(y) // output is same as x   
console.log(document.body.firstChild.nodeName)  // #text
console.log(document.body.firstElementChild.nodeName)    

// first.innerHTML 
first.innerHTML = "<i>hey I am italic</i>" 
// first.outerHTML 
first.hidden = false
first.outerHTML = "<div>hey</div>"
console.log(document.body.firstChild.data );
console.log(document.body.textContent);
