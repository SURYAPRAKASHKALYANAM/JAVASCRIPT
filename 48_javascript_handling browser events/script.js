// handling browser events
// 1. click
// 2. mouseover
// 3. mouseout
// 4. mousemove
// 5. mousedown
// 6. mouseup
// 7. keydown
// 8. keyup
// 9. keypress
// 10. focus
// 13. copy
// 14.cut
// 15. paste

let x=function(e) {
  console.log("You clicked on button",e);
};
// 1. click
let btn=document.getElementById("btn");
console.log(btn);
btn.addEventListener("click",x);

// remove event listener
// btn.removeEventListener("click",x); 

// 2. mouseover
let y=function(e) {
  console.log("You hovered on button",e);
}
btn.addEventListener("mouseover",y);

// 3. mouseout
let z=function(e) {
  console.log("You hovered out of button",e);
}
btn.addEventListener("mouseout",z);

// 4. mousemove
// let a=function(e) {
//   console.log("You moved mouse on button",e);
// }
// btn.addEventListener("mousemove",a);

// 5. mousedown
let b=function(e) {
  console.log("You pressed mouse on button",e);
}
btn.addEventListener("mousedown",b);

// 6. mouseup
let c=function(e) {
  console.log("You released mouse on button",e);
}
btn.addEventListener("mouseup",c);

// 7. keydown
let d=function(e) {
  console.log("You pressed key on button",e);
}
btn.addEventListener("keydown",d);  

// 8. keyup
let e=function(e) {
  console.log("You released key on button",e);
}
btn.addEventListener("keyup",e);  

// 9. keypress
let f=function(e) {
  console.log("You pressed key on button",e);
}
btn.addEventListener("keypress",f);  
// 10. focus
let g=function(e) {
  console.log("You focused on button",e);
}
btn.addEventListener("focus",g);  

// 11. blur
let h=function(e) {
  console.log("You blurred on button",e);
}
btn.addEventListener("blur",h); 
let text=document.getElementById("text");
// copy
let i=function(e) {
  console.log("You copied text",e);
}
text.addEventListener("copy",i);

// cut 
let j=function(e) {
  console.log("You cut text",e);
} 
text.addEventListener("cut",j);

// paste
let k=function(e) {
  console.log("You pasted text",e);
}
text.addEventListener("paste",k);

// 12. scroll
let l=function(e) {
  console.log("You scrolled",e);
}
window.addEventListener("scroll",l);

// 13. resize
let m=function(e) {
  console.log("You resized",e);
}
window.addEventListener("resize",m);

// 14. load
let n=function(e) {
  console.log("You loaded",e);
}
window.addEventListener("load",n);

// 17. online
let q=function(e) {
  console.log("You are online",e);
}
window.addEventListener("online",q);

// 18. offline
let r=function(e) {
  console.log("You are offline",e);
}
window.addEventListener("offline",r);




