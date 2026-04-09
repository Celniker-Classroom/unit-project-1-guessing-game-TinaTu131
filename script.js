// add javascript here
let answer= 0;
let guessCount =0;
let totalGuesses =0;
let scores =0;

//player name
let playerName = prompt("Enter your name:");
playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1).toLowerCase();
let totalWins = 0;

//Play
document.getElementById("playBtn").addEventListener("click", function(){
    let radios = document.getElementsByName("level");
    let range = 3;
    for (let i=0; i < radios.length; i++){
        if(radios[i]. checked){
          range = parseInt(radios[i].value);
        }
    }

//round setup
answer = Math.floor(Math.random()* range)+1;
guessCount = 0;
document.getElementById("msg").textContent = playerName+ ", guess a number between 1 and " + range;
document.getElementById("guess").value = "";
document.getElementById("giveUpBtn").disabled=false;
document.getElementById("playBtn").disabled=false;
document.getElementById("playBtn").disabled=true;

    let levelRadios = document.getElementsByName("level");
    for(let i=0; i< levelRadios.length; i++) {
    levelRadios[i].disabled=true;
}
});

//guessing
document.getElementById("guessBtn").addEventListener("click", function(){
    let input = document.getElementById("guess").value;
    let num = parseInt(input);

    if (isNaN(num)){
        document.getElementById("msg").textContext = "please enter a valud number!";
        return;
    }

    guessCount ++;
    let diff = Math.abs(num - answer);

    //correct
    if(num === answer){
        document.getElementById("msg").textContent = "Correct! " + playerName + " got it in " + guessCount + " guesses!"
    }
    updateScore(guessCount);
    reserButtons();
}
document.getElementById("guessBtn").addEventListener("click", function(){
    let input = document.getElementById("guess").value;
    let num = parseInt(input);

    if (isNaN(num)){
        document.getElementById("msg").textContent = "please enter a valid number!";
        return;
    }

    guessCount++;
    let diff = Math.abs(num - answer);

    if(num === answer){
        document.getElementById("msg").textContent = 
        "Correct! " + playerName + " got it in " + guessCount + " guesses!";

        updateScore(guessCount);
        reserButtons();
    }
    else if (num > answer){
        let temp = "";

        if (diff <= 2){
            temp = "hot";
        } else if (diff <= 5){
            temp = "warm";
        } else {
            temp = "cold";
        }

        document.getElementById("msg").textContent = "Too high (" + temp + ")";
    }
    else {
        let temp = "";

        if (diff <= 2){
            temp = "hot";
        } else if (diff <= 5){
            temp = "warm";
        } else {
            temp = "cold";
        }

        document.getElementById("msg").textContent = "Too low (" + temp + ")";
    }
});

//update score when win
function updateScore(score){
    totalWins ++;
    totalGuesses += score;

    document.getElementById("wins").textContent = "Total wins: " + totalWins;
    document.getElementById("avyScore").textContent = "Average Score: " + (totalGuesses/totalWins).toFixed(1);
    scores.push (score);
    scores.sort(function(a,b){return a-b;});
    let leaderboard = document.getElementsByName("leaderboard");
    for (let i=0; i < leaderboard.length; i++){
        if (i < scores.length)
            leaderboard[i].text
        }
    }
}
function reserButtons(){
    document.getElementById("giveUpBtn").disabled=true;
    document.getElementById("playBtn").disabled=false;

    let levelRadios = document.getElementsByName("level");
    for(let i=0; i< levelRadios.length; i++) {
        levelRadios[i].disabled=false;
    }
}