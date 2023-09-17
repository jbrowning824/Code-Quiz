var container = document.querySelectorAll(".container");
var titleEl = document.querySelector(".title");
var descEl = document.querySelector(".desc");
var startBtn = document.querySelector(".start");
var questionEl = document.querySelector(".question");
var choicesEl = document.querySelector(".choices");
var dividerEl = document.querySelector(".divider");
var resultEl = document.querySelector(".result");
var finishedEl = document.querySelector(".finished");
var scoreEl = document.querySelector(".score");
var initialsEl = document.querySelector(".initials");
var submitBtn = document.querySelector(".submit");
var timerEl = document.querySelector(".timer");
var timer;
var numCorrectAnswers = 0;
var timerCount = 5;
var questionNumber = 0;
var isComplete;
var currentQuestion;

// Create question repository
var questions = [
    {
        question: "What is not a primative type in JavaScript?",
            answers:{
                a: "number",
                b: "boolean",
                c: "int",
                d: "string"}, 
            rightAnswer: "c"
    },
    {
        question: "What is the operator for OR",
        answers:{
            a: "or",
            b: "&&",
            c: "||",
            d: "+"}, 
        rightAnswer: "c"
    }];


// startGame function
function startGame(){
    isComplete = false;
    setupGameScreen();
    startTimer();
    displayQuestion();
}

// start timer function
function startTimer(){
    timer = setInterval(() => {
        timerCount --;
        timerEl.textContent = timerCount;
        //check if all questions answered
        if (timerCount >= 0){
            if(isComplete && timerCount > 0){
                clearInterval(timer);
                gameOver();
            }
        }
        if(timerCount === 0) {
            clearInterval(timer);
            isComplete = true;
            gameOver();
        }
    }, 1000);
}

// questions
function displayQuestion(){
    currentQuestion = questions[questionNumber];
    questionEl.textContent = currentQuestion.question;
    var answerList = questions[questionNumber].answers;
    //console.log(Object.keys(answerList));
    Object.keys(answerList).forEach((key, index) =>
    {
        var li = document.createElement('li')
        li.setAttribute('id',key);
        li.setAttribute('onClick',"checkAnswer(this)");
        var text = document.createTextNode(answerList[key]);
        choicesEl.appendChild(li);
        li.appendChild(text);
    });
}

function checkAnswer(target){
    console.log(currentQuestion);
    if(currentQuestion.rightAnswer === target.id){
        resultEl.textContent = "Correct!"
        numCorrectAnswers++;
    }
    else {
        resultEl.textContent="Wrong!";
    }
    questionNumber++;
    if(questionNumber < questions.length){
        console.log("this was called");
        var choicesId = document.getElementById("choices");
        while (choicesId.firstChild){
            choicesId.removeChild(choicesId.lastChild);
        }
        displayQuestion();
    }
    else{
        gameOver();
    }
}

// wrong answer function
function incorrectAnswer(){

}

// game over function
function gameOver() {
 setupGameOverScreen();
}
// save data function

// reset scores function

function init() {
 startScreen();
}

function setupGameScreen(){
    titleEl.style.display = 'none';
    descEl.style.display = 'none';
    startBtn.style.display = 'none';
    questionEl.style.display = "";
    choicesEl.style.display = "";
    dividerEl.style.display = "";
    resultEl.style.display = "";
    timerEl.style.display = "";
    timerEl.textContent = timerCount;
}

function setupGameOverScreen(){
    questionEl.style.display = 'none';
    choicesEl.style.display = 'none';
    dividerEl.style.display = 'none';
    resultEl.style.display = 'none';
    timerEl.style.display = 'none';
    finishedEl.style.display = "";
    scoreEl.style.display = ""
    initialsEl.style.display = "";
    submitBtn.style.display = "";

    scoreEl.textContent = `Your score was: ${numCorrectAnswers}`;
}


// can i do this like a framework?? pass in the class name and turn on or off elements in that class?
function startScreen() {
        
    container.forEach(
        el => el.querySelectorAll('h1, h2, p, input, button, hr, ol').forEach(
            el => el.style.display = "none"
        ));    
        titleEl.style.display = "";
        descEl.style.display = "";
        startBtn.style.display = "";
}




// intialize on page load
init();

startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", showScores);

