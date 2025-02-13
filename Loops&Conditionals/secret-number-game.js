console.log(  "! Welcome to my website.");
var secret_number = 3;
var point = 0;
var message = "Sorry, Better Luck Next Time";
var guess = prompt("Enter your favorite number:");
guess = parseInt(guess);
//loop until you get a number
while(isNaN(guess)) {
    guess = prompt("that is not a number, please enter a number.");
    guess = parseInt(guess);
}
//once you get a numbers
if(secret_number==guess){
    point += 10;
    message = "Congratulations You Guessed The Secret Number!";
}
//to load after the prompt
window.onload = function() {
    document.getElementById("points").innerText = point;
    document.getElementById("message").innerText = message;
}