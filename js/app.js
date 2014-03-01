

var name = prompt("What is your name?");
var guess = prompt("Guess a number between 1-20");

var number = Math.floor(Math.random()*20 +1);

while(guess != number) {
  guess=prompt("Guess again!");
}

alert("Congrats " + name + " You've guessed the number! Yay!");

