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
var timerCount = 60;

// Create question repository

// startGame function
function startGame(){
 setupGameScreen();
 startTimer();
}

// start timer function
function startTimer(){
    timer = setInterval(() => {
        timerCount --;
        timerEl.textContent = timerCount;
    }, 1000);
}

// wrong answer function
function incorrectAnswer(){
    
}

// game over function
function gameOver() {

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


