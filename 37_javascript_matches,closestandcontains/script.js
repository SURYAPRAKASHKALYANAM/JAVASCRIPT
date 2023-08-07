
let id1=document.getElementById("id1"); 
console.log(id1);
let sp1=document.getElementById("sp1");
console.log(sp1);

// matches  returns true if the element would be selected by the specified selector string; otherwise, returns false.
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));

// closest returns the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter.
// If there isn't such an ancestor, it returns null.
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));


// contains returns true if the element contains the specified element, otherwise false. 
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));