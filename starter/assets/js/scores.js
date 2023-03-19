
let leaderboardArea = document.getElementById("highscores");
let leaderboardTitle = document.getElementById("h1");
let clearScoresButtton = document.getElementById("clear");

let highscorers = [];




getStoredDetails()

renderLeaderboard()



function getStoredDetails() {
    var storedHighscores = JSON.parse(localStorage.getItem("highscoreRecordsArray"));
    
    if (storedHighscores !== null) {
        highscorers = storedHighscores;
    }

  }



function renderLeaderboard() {
    leaderboardArea.innerHTML = "";

    
    for (var i = 0; i < highscorers.length; i++) {
         var initials = highscorers[i].initials;
        var score = highscorers[i].score;

         var li = document.createElement("li");
        li.textContent = initials + ", " + score;
         li.setAttribute("data-index", i);

        leaderboardArea.appendChild(li);
    }
 }



function clearScoresButtton1() {
    highscorers = [];
    leaderboardArea.innerHTML = "";
    localStorage.removeItem("highscoreRecordsArray")

};
// clear highscore leaderboard
clearScoresButtton.addEventListener("click", clearScoresButtton1);

