
const startButton = document.querySelector("#start")

const startContainer = document.getElementById("start-screen");


let submitButton = document.getElementById("submit");


// Variables for the divs on the questions

const questionComp2 = document.getElementById("question-comp2");
const questionComp1 = document.getElementById("question-comp1");
const questionComp3 = document.getElementById("question-comp3");
const questionComp4 = document.getElementById("question-comp4");




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


// const firstQuest11 = document.getElementById("quest2.1");
const secondQuest22 = document.getElementById("quest2.2");
const thirdQuest33 = document.getElementById("quest3.3");


const firstQuest41 = document.getElementById("quest4.1");
const secondQuest42 = document.getElementById("quest4.2");
const thirdQuest43 = document.getElementById("quest4.3");


// const timer = document.getElementById("time")


const currentQuestion = 0;
var timer = document.querySelector(".timer");

var timerCount = 75;

// Variables for Scores


const endScreen = document.getElementById("end-screen");
const Finalscore = document.getElementById("final-score");
var highscoreRecordsArray = [];

let score = 0;





function setTime() {
    // Sets interval in variable
    console.log(timer);
    console.log(timerCount);
    var timerInterval = setInterval(function () {
        timerCount--;
        timer.textContent = timerCount + " seconds";


        if (timerCount === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            console.log("time finished");

        }

    }, 1000);
}




function loseGame() {
    startContainer.classList.add("hide");
    console.log("you lost");

}





let gamecounter = 0;

const questionsArray = [
    {
        question: " How to do declare a variable in  Javascript? ",
        choice: ["1. const", "2. set", "3. declare"],
        answer: 1
    },
    {
        question: "How do do you print a message on the console? ",
        choice: ["1. print.log", "", "2. console.log"],
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


startButton.addEventListener("click", startGame);

function startGame() {

    score = 0;

    setTime();
    // hide start screen
    startContainer.classList.add("hide");
    questionComp1.className = "show";



    showQuestions();


}





function showQuestions() {

    let n = 4;
    let gamecounter = 0;


    // function incorrectanswerTime() {


    //     console.log("hello chi ");

    //     console.log(timer.textContent);
    //     const timerArray = timer.textContent.split(" ");
    //     let time = timerArray[0];
    //     console.log(time);

    //     var timeInt = parseInt(time);
    //     var updatedTime = timeInt - 10;
    //     console.log(updatedTime);
    //     if (updatedTime === 0) {
    //         loseGame()
    //     }


    // }

    function gamecounter1() {
        if (gamecounter >= n) {
            console.log("stop");

        }
        if (gamecounter === 0) {
            questionComp2.className = "show";
            questionComp1.classList.add("hide");

        }
        if (gamecounter === 1) {
            questionComp3.className = "show";
            questionComp2.classList.add("hide");

        }
        if (gamecounter === 2) {
            questionComp4.className = "show";
            questionComp3.classList.add("hide");

        }
        if (gamecounter === 3) {
            endScreen.className = "show";
            questionComp4.classList.add("hide");
                
            Finalscore.textContent = score;
            submitButton.addEventListener("click", submitHighscore);
            submitButton.addEventListener("click", storeUserDetails);
            submitButton.addEventListener("click", viewHighscores);
        }




        console.log("before function");
        console.log(gamecounter);
        gamecounter++
        console.log("after function");
        console.log(gamecounter);


    }
 

    function submitHighscore () {
        var userInitials = document.querySelector("#initials").value;
        score = score;
        highscoreRecordsArray.push({
            "initials": userInitials,
            "score": score,
          });
          console.log(highscoreRecordsArray);
    }



    //first
    document.getElementById("question-title4").textContent = Firstquestion;

    firstQuest41.textContent = questionsArray[0].choice[0];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    firstQuest41.append(btn);
    btn.addEventListener("click", gamecounter1);
    btn.addEventListener("click", scoreCounter);
   


    secondQuest42.textContent = questionsArray[0].choice[1];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    secondQuest42.append(btn);
    btn.addEventListener("click", gamecounter1);


    thirdQuest43.textContent = questionsArray[0].choice[2];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    thirdQuest43.append(btn);
    btn.addEventListener("click", gamecounter1);




    //Second
    document.getElementById("question-title3").textContent = Secondquestion;

    // firstQuest11.textContent = questionsArray[1].choice[1];
    // btn = document.createElement("BUTTON");
    // firstQuest11.append(btn);
    //  btn.addEventListener("click", gamecounter1);
    // btn.addEventListener("click", scoreCounter2);

    secondQuest22.textContent = questionsArray[1].choice[0];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    secondQuest22.append(btn);
    btn.addEventListener("click", gamecounter1);


    thirdQuest33.textContent = questionsArray[1].choice[2];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    thirdQuest33.append(btn);
    btn.addEventListener("click", gamecounter1);
    btn.addEventListener("click", scoreCounter);

    // firstQuest11.textContent = questionsArray[1].choice[1];
    // btn = document.createElement("BUTTON");
    // firstQuest11.append(btn);
    //  btn.addEventListener("click", gamecounter1);
    // btn.addEventListener("click", scoreCounter2);


    //Third
    document.getElementById("question-title2").textContent = Thirdquestion;

    firstQuest1.textContent = questionsArray[2].choice[0];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    firstQuest1.append(btn);
    btn.addEventListener("click", gamecounter1);
    btn.addEventListener("click", scoreCounter);


    secondQuest2.textContent = questionsArray[2].choice[1];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    secondQuest2.append(btn);
    btn.addEventListener("click", gamecounter1);


    thirdQuest3.textContent = questionsArray[2].choice[2];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    thirdQuest3.append(btn);
    btn.addEventListener("click", gamecounter1);




    // Fourth Question 

    document.getElementById("question-title1").textContent = Lastquestion;

    firstQuest.textContent = questionsArray[3].choice[0];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    firstQuest.append(btn);
    btn.addEventListener("click", gamecounter1);
    // btn.addEventListener("click", incorrectanswerTime);
    btn.addEventListener("click", scoreCounter);


    secondQuest.textContent = questionsArray[3].choice[1];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    secondQuest.append(btn);
    btn.addEventListener("click", gamecounter1);


    thirdQuest.textContent = questionsArray[3].choice[2];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    thirdQuest.append(btn);
    btn.addEventListener("click", gamecounter1)


    fourthQuest.textContent = questionsArray[3].choice[3];
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Press here";
    fourthQuest.append(btn);
    btn.addEventListener("click", gamecounter1);



}





// function scoreCounter2() {
//     score = score - 10;
//     console.log(score);
// }


function scoreCounter() {
    score = score + 10;

    console.log(score);
}





function viewHighscores() {
  window.location.href = 'highscores.html';
};



function storeUserDetails() {
  localStorage.setItem("highscoreRecordsArray", JSON.stringify(highscoreRecordsArray));
}



function getStoredDetails() {
  var storedHighscores = JSON.parse(localStorage.getItem("highscoreRecordsArray"));

  if (storedHighscores !== null) {
    highscoreRecordsArray = storedHighscores;
  }

}







function playSound () {
	let ding = new Audio('.starter\assets\sfx\incorrect.wav');
	ding.play();
}