//define the question set
var questionList = [];

//question4

var questionText = "The external JavaScript file must contain the <script> tag.";
var questionChoices = ["True","False"];
var questionCorrectAnswer = 1;
var question = {text: questionText, choices: questionChoices, correctAnswer: questionCorrectAnswer};
questionList.push(question);

//question5
questionText = 'How do you write "Hello World" in an alert box?';
questionChoices = ['alert("Hello World");', 'alertBox("Hello World");','msg("Hello World");','msgBox("Hello World");'];
questionCorrectAnswer = 0;
question = {text: questionText, choices: questionChoices, correctAnswer: questionCorrectAnswer};
questionList.push(question);

//question6
questionText = 'How do you create a function in JavaScript?';
questionChoices = ['function = myFunction()', 'function:myFunction()','function myFunction()'];
questionCorrectAnswer = 2;
question = {text: questionText, choices: questionChoices, correctAnswer: questionCorrectAnswer};
questionList.push(question);

//question7
questionText = 'How do you call a function named "myFunction"?';
questionChoices = ['myFunction()', 'call function myFunction()','call myFunction()'];
questionCorrectAnswer = 0;
question = {text: questionText, choices: questionChoices, correctAnswer: questionCorrectAnswer};
questionList.push(question);

//question8
questionText = 'How to write an IF statement in JavaScript?';
questionChoices = ['if i = 5 then', 'if i == 5 then','if (i == 5)','if i = 5'];
questionCorrectAnswer = 2;
question = {text: questionText, choices: questionChoices, correctAnswer: questionCorrectAnswer};
questionList.push(question);


//check the question list in the console log
/*for (var i=0; i<questionList.length; i++) {
              console.log(questionList[i].text);
              console.log(questionList[i].choices);
              console.log(questionList[i].correctAnswer);
};*/


/*
//var highScores = [{score: "25", initials: "dfh"},{score: "21", initials: "hpt"},{score: "20", initials: "wsb"}];
var highScores = JSON.parse(localStorage.getItem("HighScores"));
console.log(highScores);
var testScoreSubmitted = {score: "41", initials: "poa"};
*/


var headerLeft = document.querySelector("#header-left");
var headerRight = document.querySelector("#header-right");
var h1Text = document.querySelector("h1");
var h2Text = document.querySelector("h2");
var choices = document.querySelector("#choices");

var startQuizButton = document.querySelector("#start-quiz-button");
var submitButton = document.querySelector("#submit-button");
var playAgainButton = document.querySelector("#play-again-button");
var initials = document.querySelector("#initials");
var initialsInput = document.querySelector("#initialsInput");

var currentScore = 0;
var currentQuestion = 0;


function showQuestion(index){
    var myText = questionList[index].text;
    var myChoices = questionList[index].choices;
    var myAnswer = questionList[index].answer;
    
    choices.innerHTML = ""; 
    //console.log("got here");
    h1Text.innerHTML = "";
    h2Text.innerHTML = myText;
    //console.log(questionList[1]);

    for (var i = 0; i < myChoices.length; i++){
    
    //var individualScore = highScores[i];
    var button = document.createElement("button");
    //console.log(text);
    button.textContent = myChoices[i];
    //console.log(li.textContent);
    button.setAttribute("data-index",i);
    button.setAttribute("class","choiceButton");
    choices.appendChild(button);
};
}



console.log(questionList[currentQuestion]);
showQuestion(0);

choices.addEventListener("click", function(event){
   var element = event.target;
   console.log(element);
    if (element.matches(".choiceButton")) {
        console.log(element.dataset.index +" correct answer is "+questionList[currentQuestion].correctAnswer);
        if (element.dataset.index == questionList[currentQuestion].correctAnswer){
        currentScore++;
        console.log("CORRECT");
        headerRight.text = currentScore;       
        } else {
            console.log("incorrect");
        };
        currentQuestion++;
        showQuestion(currentQuestion);
        }
    });




/*viewHighScoresButton.addEventListener("click", function() {
    
    startTab.style.display = "none";
    submitScoreTab.style.display = "none";
    quizTab.style.display = "none";
    highScoresTab.style.display = "block";
    renderHighScores();
    console.log("line 30");
});

/*playAgainButton.addEventListener("click", function() {
   startQuiz();
});

startQuizButton.addEventListener("click", function() {
    startQuiz();
 });

gotoHomepageButton.addEventListener("click", function() {
    startUp();
});

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
};




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
} 



//showSubmitScore();
//renderHighScores();*/