// game of snake ,water and gun
// snake vs water - snake wins
// water vs gun - water wins
// gun vs snake - gun wins

let user = prompt("Enter your choice: Snake,Water or Gun");
let computer = Math.random();
// computer < 0.34 - snake 
// computer <= 0.67 - water
// computer > 0.67 - gun
if (computer < 0.34) {
    computer = "Snake";
} else if (computer <= 0.67) {   
    computer = "Water";
}
else {
    computer = "Gun";
}
function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    if (choice1 === "Snake") {
        if (choice2 === "Water") {
            return "Snake wins";
        } else {
            return "Gun wins";
        }
    }
    if (choice1 === "Water") {
        if (choice2 === "Snake") {
            return "Snake wins";
        } else {
            return "Water wins";
        }
    }
    if (choice1 === "Gun") {
        if (choice2 === "Snake") {
            return "Gun wins";
        } else {
            return "Water wins";
        }
    }
}
console.log(`User: ${user}`);
console.log(`Computer: ${computer}`);
let result = compare(user, computer);
alert(`User: ${user}\nComputer: ${computer}\nResult: ${result}`);
alert("Thanks for playing");