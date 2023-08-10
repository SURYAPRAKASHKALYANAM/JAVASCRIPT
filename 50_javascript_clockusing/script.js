// clock using js
let clock = document.getElementById("clock");

function updateClock() {
    let time = new Date();
    clock.innerHTML = time;
    }
setInterval(updateClock, 1000);
