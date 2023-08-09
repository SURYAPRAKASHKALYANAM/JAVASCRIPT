

//1  create 3 buttons in html file and add event listener to each button and display message on click of each button 
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let func1=function(e) {
    alert("You clicked on button 1");
};

let func2=function(e) {
    alert("You clicked on button 2");
};

let func3=function(e) {
    alert("You clicked on button 3");
};


//event listener

btn1.addEventListener("click", func1);  // add event listener to btn1

btn2.addEventListener("click", func2);  // add event listener to btn2

btn3.addEventListener("click", func3);  // add event listener to btn3

// 2 create a website which is cappable of storing bookmarks of your websites using href

// google button
document.getElementById("google").addEventListener("click", function(e) {  
    location.href = "https://www.google.com";
});

//facebook button
document.getElementById("facebook").addEventListener("click", function(e) {
    location.href = "https://www.facebook.com";
}
);

//twitter button
document.getElementById("twitter").addEventListener("click", function(e) {
    location.href = "https://www.twitter.com";
}
);


//4. write a javascript program to keep fetching contents of a website every 5 seconds 
const fetchContent = async url => {
    const response = await fetch(url);  
    const json = await response.json();
    return json;    
};

setInterval(async function() {
   let url='https://jsonplaceholder.typicode.com/todos/1';  
   console.log(await fetchContent(url));
    document.getElementById("fetch").innerHTML=JSON.stringify(await fetchContent(url));
//    console.log(fetch(url).then(response => response.json()));
//    document.getElementById("fetch").innerHTML=fetch(url).then(response => response.json());
}, 5000);

// // 5. create a glowing bulb using classlist toggle  

// get bulb element
let bulb = document.getElementById("bulb");
console.log("true");
// toggle bulb class to bulb element every 300ms
console.log(bulb.classList);
setInterval(function() {
    bulb.classList.toggle("bulbb");
}, 300);