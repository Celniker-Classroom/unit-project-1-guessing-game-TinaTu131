// add javascript here
let answer= 0;
let guessCount =0;
let totalGuesses =0;
let scores =0;

//player name
let playerName = prompt("Enter your name:");

//Play
document.getElementById("playBtn"),addEventListener("click", function(){
    let radios = document.getElementsByName("level");
    let range = 3;
    for (let i=0; i < radios.length; i++){
        if(radios[i]. checked){
            range = parseInt (radios[i],value);
        }
    }

//round setup
answer = Math.floor(Math.random()* range)+1;
guessCOUNT = 0;
document.getElementById("msg").textContent = playerName+ ", guess a number between 1 and " + range;
document.getElementById("guess").value = "";
document.getElementById("giveUpBtn").disabled=false;
document.getElementById("playBtn").diabled=false;
document.getElementById("playBtn").diabled=true;

    let levelRadios+ document.getElementByName ("level");
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
else if ( num> answer) {
    let temp="";
    if (diff < = 5){
        temp= "Hot!";
    }else if (diff < = 5){
        temp = "Warm";
    }else 

}
else{}
})

//update score when win
function updateScore(score){
    totalWins ++;
    totalGuesses += score;

    document.getElementById("wins").textContent = "Total wins: " + totalWins;
    document.getElementById("avyScore").textContent = "Average Score: " + (totalGuesses/totalWins).toFixed(1);
    scores.push (score);
    scores.sort (function(a,b){retern a-b;});
    let leaderboard = document.getElementsByName("leaderboard");
    for (let i=0; i < leaderboard.length; i++){
        if (o < scores.length){
            leaderboard[i].text
        }
    }
}
function reserButtons(){
document.getElementById("giveUpBtn").disabled=false;
document.getElementById("playBtn").diabled=false;
document.getElementById("playBtn").diabled=true;

    let levelRadios+ document.getElementByName ("level");
    for(let i=0; i< levelRadios.length; i++) {
        Radios[i].disabled=false;
}
}