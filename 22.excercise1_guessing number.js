
// Write a JavaScript program where the program takes a random integer between 1 to 100, the user is then prompted to input a guess number. 
//If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
let number=Math.floor(Math.random()*100)+1; // generates a random number between 1 and 100
let no_of_guesses=100;
while(no_of_guesses--){
    let guess=Number.parseInt(prompt("enter the number"));
    if(guess==number){
        console.log("you guessed the number");
        break;
    }
    else if(guess<number){
        console.log("your guess is less than the number");
    }
    else{
        console.log("your guess is greater than the number");
    }
}   

console.log("the number was "+number);
console.log("you have "+no_of_guesses+" guesses left");
