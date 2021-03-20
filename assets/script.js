//define the question set
var questionList = [];
var letters = "abcdefgh".split("");


function addQuestion(){
    question = {text: questionText, choices: questionChoices, correctAnswer: questionCorrectAnswer};
    questionList.push(question); 
};

//question 1
questionText = 'What will the following code return: Boolean(10>9)';
questionChoices = ['true', 'false','NaN'];
questionCorrectAnswer = 0;
addQuestion();

//question2
questionText = 'Which operator is used to assign a value to a variable?';
questionChoices = ['-','*', 'x','='];
questionCorrectAnswer = 3;
addQuestion();

//question 3
questionText = "How do you declare a Javascript variable?";
questionChoices = ['variable carName', 'var carName','v carName'];
questionCorrectAnswer = 1;
addQuestion();

//4
questionText = 'Which event occurs when the user clicks on an HTML element?';
questionChoices = ['onclick', 'onchange','onmouseover','onmouseclick'];
questionCorrectAnswer = 0;
addQuestion();

//5
questionText = "How can you detect the client's browser name?";
questionChoices = ['navigator.appName','client.navName', 'browser.name'];
questionCorrectAnswer = 0;
addQuestion();

//6
questionText = 'How do you write "Hello World" in an alert box?';
questionChoices = ['alert("Hello World");', 'alertBox("Hello World");','msg("Hello World");','msgBox("Hello World");'];
questionCorrectAnswer = 0;
addQuestion();

//7
var questionText = "The external JavaScript file must contain the &lt;script&gt; tag.";
var questionChoices = ["True","False"];
var questionCorrectAnswer = 1;
addQuestion();

//8
questionText = 'How do you write "Hello World" in an alert box?';
questionChoices = ['alert("Hello World");', 'alertBox("Hello World");','msg("Hello World");','msgBox("Hello World");'];
questionCorrectAnswer = 0;
addQuestion();

//9
questionText = 'How do you create a function in JavaScript?';
questionChoices = ['function = myFunction()', 'function:myFunction()','function myFunction()'];
questionCorrectAnswer = 2;
addQuestion();

//10
questionText = 'How do you call a function named "myFunction"?';
questionChoices = ['myFunction()', 'call function myFunction()','call myFunction()'];
questionCorrectAnswer = 0;
addQuestion();

//11
questionText = 'How to write an IF statement in JavaScript?';
questionChoices = ['if i = 5 then', 'if i == 5 then','if (i == 5)','if i = 5'];
questionCorrectAnswer = 2;
addQuestion();

//12
questionText = 'What is the correct syntax for opening a new window called "w2"?';
questionChoices = ['w2 = window.new("http://www.w3schoosl.com");', 'w2=window.open("http://www.w2schools.com");'];
questionCorrectAnswer = 1;
addQuestion();

//13
questionText = 'How do you find the number with the highest value of x and y?';
questionChoices = ['top(x,y)', 'Math.ceil(x,y)','ceil(x,y)','Math.max(x,y)'];
questionCorrectAnswer = 3;
addQuestion();

//14
questionText = 'How do you round the number 7.25 to the nearest integer?';
questionChoices = ['Math.rnd(7.25)','rnd(7.25)','Math.round(7.25)','round(7.25)'];
questionCorrectAnswer = 2;
addQuestion();

//15
questionText = 'What is the correct way to write a JavaScript array?';
questionChoices = ['var colors = ["red", "green", "blue"]  ','var colors = "red", "green", "blue"','var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")','var colors = (1:"red", 2:"green", 3:"blue")'];
questionCorrectAnswer = 2;
addQuestion();

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
var h2QuestionNumber = document.querySelector("#question-number");
var h2QuestionText = document.querySelector("#question-text");
var h2ScoreText = document.querySelector("#score-text");
var choices = document.querySelector("#choices");

var startQuizButton = document.querySelector("#start-quiz-button");
var submitButton = document.querySelector("#submit-button");
var playAgainButton = document.querySelector("#play-again-button");
var initials = document.querySelector("#initials");
var initialsPrompt = document.querySelector("#initials-prompt");
var checkMessage = document.querySelector("#check-message");

var currentScore = 0;
var currentQuestion = 0;
var secondsLeft = 30;
var completed = false;

//this function displays a question with the choices
function showQuestion(index){
    var myText = questionList[index].text;
    var myChoices = questionList[index].choices;
    var myAnswer = questionList[index].answer;
    
    choices.innerHTML = ""; 
    //console.log("got here");
    h1Text.innerHTML = "";
    h2QuestionNumber.innerHTML = "Question #"+(index+1);
    h2QuestionText.innerHTML = myText;
    //console.log(questionList[1]);

    for (var i = 0; i < myChoices.length; i++){
    
        //var individualScore = highScores[i];
        var button = document.createElement("button");
        //console.log(text);
        button.textContent = letters[i]+". "+ myChoices[i];
        //console.log(li.textContent);
        button.setAttribute("data-index",i);
        button.setAttribute("class","choiceButton");
        choices.appendChild(button);
    };
}




//console.log(questionList[currentQuestion]);
//showQuestion(0);

function pageLoad(){
//this function runs when the page loads.
    h1Text.text = "Coding Quiz";
    h2QuestionNumber.text = "";
    h2QuestionText.text= "";
    choices.innerHTML = "";
    //startQuizButton.setAttribute("style", "display: none");
    initials.setAttribute("style", "display: none");
    submitButton.setAttribute("style", "display: none");
    initialsPrompt.setAttribute("style", "display: none");
} 

pageLoad();


startQuizButton.addEventListener("click",function(event){
    completed = false;
    startQuizButton.setAttribute("style", "display:none");
    currentScore = 0;
    console.log("got to set time");
    //headerRight.innerHTML = "Timer:" + secondsLeft;
    setTime();
    showQuestion(currentScore);
})

function setTime() {
    // Sets interva headerRight.innerHTML = "Timer:" + secondsLeft;l in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
     headerRight.innerHTML = "Timer: " + secondsLeft;
        console.log(secondsLeft+" "+completed);
    if (completed){
        clearInterval(timerInterval);
        headerRight.innerHTML = "Timer: --";
    };
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        quizOver("Time's Up!");
      }
  
    }, 1000);
  }



//When one of the choices is clicked, this function will check to see if the choice
//matches the correct answer.  If true, then the function increments the currentScore
//by 1.
choices.addEventListener("click", function(event){
   var element = event.target;
   //console.log(element);
    if (element.matches(".choiceButton")) {
        //console.log(element.dataset.index +" correct answer is "+questionList[currentQuestion].correctAnswer);
        var checkMessageText = "na";
        if (element.dataset.index == questionList[currentQuestion].correctAnswer){
            currentScore++;
            checkMessageText = "Correct!";
            //headerRight.text = currentScore;       
        } else {
            var checkMessageText = "Incorrect.  The correct answer was: ";
            var myCorrectAnswer = questionList[currentQuestion].correctAnswer;
            var myCorrectAnswerLetter = letters[myCorrectAnswer];
            checkMessageText += myCorrectAnswerLetter + ".";
        };
        console.log(checkMessageText);
        checkMessage.innerHTML=checkMessageText;
        window.setTimeout(function(){checkMessage.innerHTML="";},2000);
        currentQuestion++;
        if (currentQuestion >= questionList.length) {
            completed = true;
            quizOver("All Done!");
            currentQuestion = 0;
        } else {
            showQuestion(currentQuestion);
        }
        //console.log(currentQuestion + " " + questionList.length);
    }
});

function quizOver(message) {
    h1Text.innerHTML = message;
    h2ScoreText.innerHTML = "Your score is " + currentScore;
    choices.innerHTML = ""; 
    h2QuestionNumber.innerHTML="";
    h2QuestionText.innerHTML="";
    initialsPrompt.setAttribute("style", "display: block");
    initials.setAttribute("style","display: block");
    submitButton.setAttribute("style","display: block");
};

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    //alertBox("alert");
    var userInitials = initials.value.trim();
    var scoreSubmitted = {score:currentScore, initials:userInitials};
    //var scoreSubmitted = {score: 7, initials: "luk"};
    console.log(scoreSubmitted);
    if (!userInitials) {
        alert("Enter Initials");
    } else {
        addNewScore(scoreSubmitted);
        window.location.href = "./highScores.html";
    }
});

//addNewScore({score:6, initials: "PLL"});
//addNewScore({score:0, initials: "blu"});

function addNewScore(myScoreSubmitted){
     //this function adds the new score to the highScores array.
     //the highScores array is ordered from highest to lowest.
     var highScores = JSON.parse(localStorage.getItem("HighScores"));
     console.log(highScores);
     //console.log(highScores.length);
     if ((!highScores)||(highScores.length == 0)) {
        highScores = [];
        highScores.push(myScoreSubmitted);
    } else{
            if (myScoreSubmitted.score >= highScores[0].score){
                highScores.unshift(myScoreSubmitted);
            } else if (myScoreSubmitted.score < highScores[highScores.length-1].score){
                highScores.push(myScoreSubmitted);
            } else {
                for (var counter = 0; counter < highScores.length; counter++){
                    console.log(counter + " " + JSON.stringify(highScores[counter]));
                    if (myScoreSubmitted.score >= highScores[counter].score){
                        highScores.splice(counter,0,myScoreSubmitted);
                        break;
                    };
                };
            };
        }
    localStorage.setItem("HighScores", JSON.stringify(highScores));
    return;
 }

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