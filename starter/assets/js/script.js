

const questions1 = document.querySelector("questions")
const questionsTitle = document.querySelector("questions-title")
const startButton = document.querySelector("start")

const questionsArray = [
{  question : " How to do declare a variable in  Javascript? ",
choice : ["1. const", "2. set", "3. declare"],
answer : 1

},   {
    question: "How do do you print a message on the console? ",
    choice: ["1. print.log", "2. write.log", "3. console.log" ],
    answer: 3
}, 
{  question: "How do you a single line comment in Javascript? ",
choice: ["1. use //", "Write comment this", "3. You can't comment" ],
answer: 1

},
{  question: "How do you a single line comment in Javascript? ",
choice: ["1. use //", "Write comment this", "3. You can't comment" ],
answer: 1


},



];











var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");


var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;


startButton.addEventListener("click, ")