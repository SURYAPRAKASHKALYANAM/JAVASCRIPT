let first=document.getElementById("first");
console.log(first);
console.log(first.getAttribute("id"));
console.log(first.getAttribute("class"));   
console.log(first.getAttribute("href"));
console.log(first.getAttribute("style"));
first.setAttribute("style","color:blue");
first.setAttribute("hidden","true");
console.log(first.hasAttribute("hidden"));
first.removeAttribute("style"); 
console.log(first.attributes); // returns all attributes of the element in a NamedNodeMap object

console.log(first.dataset); // returns all data-* attributes of the element in a DOMStringMap object         
console.log(first.dataset.game); // returns the value of the data-game attribute
console.log(first.dataset.player); // returns the value of the data-player attribute 
first.setAttribute("data-player","surya");  // set the value of the data-player attribute      
console.log(first.dataset.player); // returns the value of the data-player attribute surya
console.log(first);     