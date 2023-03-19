
let leaderboardArea = document.getElementById("highscores");
let leaderboardTitle = document.getElementById("h1");
let clearScoresButtton = document.getElementById("clear");

let highscore = [];




getStoredDetails()

createLeaderboard()



function getStoredDetails() {
 var storedHighscores = JSON.parse(localStorage.getItem("highscoreRecordsArray"));
    
    if (storedHighscores !== null) {
        highscore = storedHighscores;
    }

  }



function createLeaderboard() {
    leaderboardArea.innerHTML = "";

    
    for (var i = 0; i < highscore.length; i++) {
         let initials = highscore[i].initials;
        let score = highscore[i].score;

         let ol = document.createElement("ol");
        ol.textContent = initials + ", " + score;
         ol.setAttribute("data-index", i);
         

        leaderboardArea.appendChild(ol);
    }
 }


function clearScoresButtton1() {
    highscore = [];
    leaderboardArea.innerHTML = "";
    localStorage.removeItem("highscoreRecordsArray")

};

clearScoresButtton.addEventListener("click", clearScoresButtton1);

