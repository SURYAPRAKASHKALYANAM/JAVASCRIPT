let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
// a.appendChild(div); // append div as the last child of a
// a.append(div); // append div as the last child of a 
// a.prepend(div); // append div as the first child of a
// a.before(div); // insert div before a
// a.after(div); // insert div after a
// a.replaceWith(div); // replace a with div     