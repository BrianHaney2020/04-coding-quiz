var highScores = JSON.parse(localStorage.getItem("HighScores"));
//var highScores = [{score: "25", initials: "dfh"},{score: "21", initials: "hpt"},{score: "20", initials: "wsb"}];
var currentScore = 35;
var scoreList = document.querySelector("#score-list");
var pageBody = document.querySelector("body");
var clearHighScores = document.querySelector("#clear-high-scores");

console.log(highScores);

localStorage.setItem("HighScores", JSON.stringify(highScores));
document.onload = renderHighScores();

//renderHighScores();

clearHighScores.addEventListener("click", function(){
    highScores = [];
    console.log("got to click");
    localStorage.setItem("HighScores", JSON.stringify(highScores));
    //renderHighScores();
    scoreList.innerHTML = "";
});



function showSubmitScore (){
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
};




function addNewScore(){
   // event.preventDefault;
    scoreList.setAttribute("display", "block");
    //h1Message.innerHTML = "High Scores";
    console.log(testScoreSubmitted);
    //this function adds the new score to the highScores array.
    //the highScores array is ordered from highest to lowest.
        
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
        console.log(counter + " " + testScoreSubmitted.score + " " + highScores[counter].initials);
        console.log(counter);

        
    
        localStorage.setItem("HighScores", JSON.stringify(highScores));
        return;
}
//addNewScore();



function renderHighScores(){
    scoreList.innerHTML = ""; 
    //console.log(highScores.length);
    if (highScores) {
        for (var i = 0; i < highScores.length; i++){
            var individualScore = highScores[i];
            var li = document.createElement("li");
            li.textContent = individualScore.initials + " " + individualScore.score;
            //console.log(li.textContent);
            li.setAttribute("data-index",i);
            li.setAttribute("class","high-score-list-item");
            scoreList.appendChild(li);
        }
    }
}



//showSubmitScore();
//renderHighScores();