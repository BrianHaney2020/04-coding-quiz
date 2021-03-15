//dummy values to test functionality
var testScoreSubmitted = {score: "25", initials: "bdh"};
var highScores = [{score: "25", initials: "dfh"},{score: "21", initials: "hpt"},{score: "20", initials: "wsb"}];
var scoreList = document.querySelector("#score-list");

localStorage.setItem("High Scores", JSON.stringify(highScores));
console.log(highScores);
//temp = localStorage.getItem("High Scores");
//temp = JSON.parse(temp);
//console.log(temp[0]);
//console.log(temp[2].score);

function addNewScore(){
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
        //console.log(counter + " " + testScoreSubmitted.score + " " + highScores[counter].initials);
        //console.log(counter);

        
    
        localStorage.setItem("High Scores", JSON.stringify(highScores));
        
}
addNewScore();



function renderHighScores(){
    scoreList.innerHTML = ""; 
    console.log(highScores.length);
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


renderHighScores();