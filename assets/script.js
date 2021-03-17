//dummy values to test functionality

//var highScores = [{score: "25", initials: "dfh"},{score: "21", initials: "hpt"},{score: "20", initials: "wsb"}];
var highScores = JSON.parse(localStorage.getItem("HighScores"));
console.log(highScores);
var testScoreSubmitted = {score: "41", initials: "poa"};




var startQuizButton = document.querySelector("#start-quiz-button");
var submitButton = document.querySelector("#submit-button");
var playAgainButton = document.querySelector("#play-again-button");



var scoreList = document.querySelector("#score-list");
var initials = document.querySelector("#initials");
var initialsInput = document.querySelector("#initialsInput");


var h1Message = document.querySelector("h1");
var headerLeft = document.querySelector("#header-left");
var headerRight = document.querySelector("#header-right");


/*viewHighScoresButton.addEventListener("click", function() {
    
    startTab.style.display = "none";
    submitScoreTab.style.display = "none";
    quizTab.style.display = "none";
    highScoresTab.style.display = "block";
    renderHighScores();
    console.log("line 30");
});*/

/*playAgainButton.addEventListener("click", function() {
   startQuiz();
});

startQuizButton.addEventListener("click", function() {
    startQuiz();
 });

gotoHomepageButton.addEventListener("click", function() {
    startUp();
});*/

submitButton.addEventListener("click", function(event) {
    
    addNewScore();
    alert.display("ran");
});


function countdown() {
    var timeLeft = 5;
    //headerRight.textContent = "Timer: "+timeLeft;
    var timeInterval = setInterval(function () {
      if (timeLeft >= 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        headerRight.textContent = "Timer: "+timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        headerRight.textContent = "Time's Up!";
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        
      }
    }, 1000);
  };



function startQuiz(){
    //this function starts the quiz.

    startTab.style.display = "none";
    quizTab.style.display = "block";
    submitScoreTab.style.display = "none";
    highScoresTab.style.display = "none";
    countdown();
};


//localStorage.setItem("High Scores", JSON.stringify(highScores));


/*function showSubmitScore (){
//event.preventDefault;
scoreList.setAttribute("display", "none");
headerLeft.innerHTML="";
headerRight.innerHTML="";
h1Message.innerHTML = "Congratulations";
console.log("line 10");
submitButton.addEventListener("click", function(event) {
    //event.preventDefault;
    //console.log("line 13");
    console.log("got here")
    testScoreSubmitted.initials = initials.value;    
    addNewScore();
    
});
return;
};*/




function addNewScore(){
    //event.preventDefault;
    //scoreList.setAttribute("display", "block");
    
    //this function adds the new score to the highScores array.
    //the highScores array is ordered from highest to lowest.
    console.log(testScoreSubmitted);
    
    if (testScoreSubmitted.score >= highScores[0].score){
        highScores.unshift(testScoreSubmitted);

      
    } else if (testScoreSubmitted.score < highScores[highScores.length-1].score){
        highScores.push(testScoreSubmitted);
    } else {
        for (var counter = 0; counter < highScores.length; counter++){
            console.log(counter + " " + JSON.stringify(highScores[counter]));
            if (testScoreSubmitted.score >= highScores[counter].score){
                highScores.splice(counter,0,testScoreSubmitted);
                break;}
        }
    }
        localStorage.setItem("HighScores", JSON.stringify(highScores));
        return;
};
//addNewScore();


/*
function renderHighScores(){
    scoreList.innerHTML = ""; 
    //console.log(highScores.length);
    for (var i = 0; i < highScores.length; i++){
        var individualScore = highScores[i];
        var li = document.createElement("li");
        li.textContent = individualScore.initials + " " + individualScore.score;
        //console.log(li.textContent);
        li.setAttribute("data-index",i);
        li.setAttribute("class","high-score-list-item");
        scoreList.appendChild(li);
    }
} */



//showSubmitScore();
//renderHighScores();