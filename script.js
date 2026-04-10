// add javascript here
let answer= 0;
let guessCount =0;
let totalGuesses =0;
let scores = [];
let startTime = 0; 
let times = [];  

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
startTime = new Date().getTime(); 
document.getElementById("msg").textContent = playerName+ ", guess a number between 1 and " + range;
document.getElementById("guess").value = "";
document.getElementById("giveUpBtn").disabled=false;
document.getElementById("playBtn").disabled=true;
document.getElementById("guessBtn").disabled = false;

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
        document.getElementById("msg").textContent = "please enter a valid number!"; 
        return; 
    }

    guessCount ++;
    let diff = Math.abs(num - answer);

    if(num === answer){
        document.getElementById("guessBtn").disabled = true;
        document.getElementById("msg").textContent = 
        "Correct! " + playerName + " got it in " + guessCount + " guesses!";

        updateScore(guessCount, true);
        updateTimers(new Date().getTime());
        reset();
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
function updateScore(score, isWin){
    if(isWin){
        totalWins++;
        totalGuesses += score;
    }

    document.getElementById("wins").textContent = "Total wins: " + totalWins;

    if(totalWins > 0){
        document.getElementById("avgScore").textContent =
        "Average Score: " + (totalGuesses/totalWins).toFixed(1);
    }

    scores.push(score);
    scores.sort(function(a,b){return a-b;});

    let leaderboard = document.getElementsByName("leaderboard");

    for (let i=0; i < leaderboard.length; i++){
        if (i < scores.length){
            leaderboard[i].textContent = scores[i];
        } else {
            leaderboard[i].textContent = "--";
        }
    }
}

function reset(){
    document.getElementById("giveUpBtn").disabled = true;
    document.getElementById("playBtn").disabled = false;
    document.getElementById("guessBtn").disabled = true;

    let levelRadios = document.getElementsByName("level");
    for(let i=0; i< levelRadios.length; i++) {
        levelRadios[i].disabled = false;
    }
}


setInterval(function(){
    document.getElementById("date").textContent = time();
},1000);


document.getElementById("giveUpBtn").addEventListener("click", function(){
    let radios = document.getElementsByName("level");
    let range = 3;

    for (let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            range = parseInt(radios[i].value);
        }
    }

    document.getElementById("msg").textContent = 
    "You gave up! The number was " + answer;

    updateScore(range, false);
    updateTimers(new Date().getTime());
    reset();
});

function updateTimers(endTime){
    let elapsed = (endTime - startTime) / 1000;
    times.push(elapsed);

    let fastest = Math.min(...times);
    let avg = times.reduce((a,b)=>a+b,0) / times.length;

    document.getElementById("fastest").textContent = fastest.toFixed(1);
    document.getElementById("avgTime").textContent = avg.toFixed(1);
}

function time(){
    let now = new Date();

    let months = ["January","February","March","April","May","June",
                  "July","August","September","October","November","December"];

    let day = now.getDate();
    let suffix = "th";

    if(day % 10 === 1 && day !== 11) suffix = "st";
    else if(day % 10 === 2 && day !== 12) suffix = "nd";
    else if(day % 10 === 3 && day !== 13) suffix = "rd";

    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    return `${months[now.getMonth()]} ${day}${suffix}, ${now.getFullYear()} ${hours}:${minutes}:${seconds}`;
}