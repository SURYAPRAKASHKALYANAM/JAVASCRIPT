// change card title to red color

let ctitle=document.getElementById("firstcardtitle");
ctitle.style.color="red"; 


let ctitles = document.querySelectorAll(".card-title");
ctitles[0].style.color = "blue";
ctitles[1].style.color = "red";
ctitles[2].style.color = "green";
console.log(ctitles)

document.querySelector(".this").style.color = "black";
document.querySelector(".this").style.background = "red";

// querySelectorAll

let ctitle1=document.querySelectorAll(".card-title");
console.log(ctitle1);
ctitle1[0].style.color="red";
ctitle1[1].style.color="blue";
ctitle1[2].style.color="green";

// tagname

let ctitle2=document.getElementsByTagName("a");
console.log(ctitle2);
console.log(document.querySelector(".card").getElementsByTagName("a"))

// name
console.log(document.getElementsByName("search"));
