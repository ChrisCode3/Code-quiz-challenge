

const startButton = document.querySelector("#start")

const startContainer = document.getElementById("start-screen");


const questions1 = document.getElementById("questions")
const questionsTitle = document.getElementById("#questions-title")
const questionChoice = document.getElementById("choices");
const questionAnswer = document.getElementById("answer");





const firstQuest = document.getElementById("quest1");
const secondQuest = document.getElementById("quest2");
const thirdQuest = document.getElementById("quest3");
const fourthQuest = document.getElementById("quest4");




const firstQuest1 = document.getElementById("quest1.1");
const secondQuest2 = document.getElementById("quest2.1");
const thirdQuest3 = document.getElementById("quest3.1");


const firstQuest11 = document.getElementById("quest2.1");
const secondQuest22 = document.getElementById("quest2.2");
const thirdQuest33 = document.getElementById("quest3.3");



// const timer = document.getElementById("time")

const timer = document.getElementById("timer");
var timerCount;

const currentQuestion = 0;

const array = 0;



const questionsArray = [
    {
        question: " How to do declare a variable in  Javascript? ",
        choice: ["1. const", "2. set", "3. declare"],
        answer: 1

    }, {
        question: "How do do you print a message on the console? ",
        choice: ["1. print.log", "2. write.log", "3. console.log"],
        answer: 3
    },
    {
        question: "How do you a single line comment in Javascript? ",
        choice: ["1. use //", "2. Write comment this", "3. You can't comment"],
        answer: 1

    },
    {
        question: "Which of the following is a server-side Java Script object? ",
        choice: ["1. Function", "2. File", "3. FileUpload ", "4. Date"],
        answer: 1


    },




];


// console.log(questionsArray[3]);
// console.log(questionsArray[3].question + " Hello   adonai " + questionsArray[3].question);
// console.log(questionsArray[3].choice[0] +questionsArray[3].choice[1] + questionsArray[3].choice[2]);
// console.log(questionsArray[3].question + " Hello   adonai " + questionsArray[3].question);
// console.log(questionsArray[3].question);
// console.log(questionsArray[3].question + " Hello   adonai " + questionsArray[3].question);








// Creating the viables for the questions titles


const Lastquestion = questionsArray[3].question
const Thirdquestion = questionsArray[2].question
const Secondquestion = questionsArray[1].question
const Firstquestion = questionsArray[0].question




for (let index = 0; index < array.length; index++) {
    const element = array[index];

}






startButton.addEventListener("click", startGame);


function startGame() {


    // hide start screen
    startContainer.classList.add("hide");
    questions1.className = "show";



    // startTime = setInterval(set)
    //  timerCount = 75;
    //  startTimer()

    // set user score to 0
    userScore = 0;





    // Fourth Question 
    document.getElementById("question-title1").textContent = Lastquestion;


    firstQuest.textContent = questionsArray[3].choice[0];
    btn = document.createElement("BUTTON");
    firstQuest.append(btn);


    secondQuest.textContent = questionsArray[3].choice[1];
    btn = document.createElement("BUTTON");
    secondQuest.append(btn);

    thirdQuest.textContent = questionsArray[3].choice[2];
    btn = document.createElement("BUTTON");
    thirdQuest.append(btn);

    fourthQuest.textContent = questionsArray[3].choice[3];
    btn = document.createElement("BUTTON");
    fourthQuest.append(btn);





    //Third
    document.getElementById("question-title2").textContent = Thirdquestion;

    firstQuest1.textContent = questionsArray[2].choice[0];
    btn = document.createElement("BUTTON");
    firstQuest1.append(btn);


    secondQuest2.textContent = questionsArray[2].choice[1];
    btn = document.createElement("BUTTON");
    secondQuest2.append(btn);

    thirdQuest3.textContent = questionsArray[2].choice[2];
    btn = document.createElement("BUTTON");
    thirdQuest3.append(btn);



    //Second
    document.getElementById("question-title3").textContent = Secondquestion;

    firstQuest11.textContent = questionsArray[1].choice[0];
    btn = document.createElement("BUTTON");
    firstQuest11.append(btn);


    secondQuest22.textContent = questionsArray[1].choice[1];
    btn = document.createElement("BUTTON");
    secondQuest22.append(btn);

    thirdQuest33.textContent = questionsArray[1].choice[2];
    btn = document.createElement("BUTTON");
    thirdQuest33.append(btn);





    function beginQuestions() {

        //questionChoice.textContent = questions[currentQuestion].question;
    }

    // document.getElementById("questions").textContent= Lastquestion;









}






