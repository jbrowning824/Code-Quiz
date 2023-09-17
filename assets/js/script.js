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


// Create question repository

// startGame function

// start timer function

// wrong answer function

// game over function

// save data function

// reset scores function

function init() {
 startScreen();

}


function startScreen() {
    container.forEach(
        el => el.querySelectorAll('h1, h2, p, input, button, hr').forEach(
            el => el.style.display = "none"
        ));    
        titleEl.style.display = "";
        descEl.style.display = "";
        startBtn.style.display = "";
}


init();




