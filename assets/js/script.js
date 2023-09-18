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
var highScoresEl = document.querySelector(".high-scores");
var asideHighScroesEl = document.querySelector(".high-scores-aside");
var loadContent = document.querySelector(".load-content");
var timer;
var numCorrectAnswers = 0;
var timerCount = 60;
var questionNumber = 0;
var isComplete;
var currentQuestion;
var highScoreList = [];
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
            c: "++",
            d: "||"}, 
        rightAnswer: "d"
    },
    {
        question: "if / ____ is a conditional statement",
        answers:{
            a: "else",
            b: "then",
            c: "while",
            d: "next"}, 
        rightAnswer: "a"
    },
    {
        question: "Given arr = ['foo', 'Joe', '107'] what is the value of arr[2]?",
        answers:{
            a: "undefined",
            b: "107",
            c: "foo",
            d: "Joe"}, 
        rightAnswer: "b"
    },
    {
        question: "How do you get a specific element by ID?",
        answers:{
            a: "document.getElementById()",
            b: "element.getElementById()",
            c: "docuemnt.getId()",
            d: "window.getElementById()"}, 
        rightAnswer: "a"
    },
    {
        question: "True or False: function sayMyName() is never called:\
         //displays users name \
          function sayMyName(name) {\
             \talert(name); \
            } \
            //runs on page load\
            function init(){ \
                sayMyName(\"Joe\");\
            }",
        answers:{
            a: "True",
            b: "False"},
        rightAnswer: "a"
    },
    {
        question: "What method adds a value to the begining of an array?",
        answers:{
            a: "pop",
            b: "push",
            c: "unshift",
            d: "firstElement()"}, 
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
        timerEl.textContent = "Time: " + timerCount;
        //check if all questions answered
        if (timerCount >= 0){
            if(isComplete && timerCount > 0){
                clearInterval(timer);
                
            }
        }
        if(timerCount <= 0) {
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
    Object.keys(answerList).forEach((key, index = 1) =>
    {
        var li = document.createElement('li')
        li.setAttribute('id',key);
        li.setAttribute('class', 'listChoice')
        li.setAttribute('onClick',"checkAnswer(this)");
        var text = document.createTextNode(`${index+1}. ${answerList[key]}`);
        choicesEl.appendChild(li);
        li.appendChild(text);
    });
}

//check answer
function checkAnswer(target){
    console.log(currentQuestion);
    if(currentQuestion.rightAnswer === target.id){
        resultEl.textContent = "Correct!"
        numCorrectAnswers++;
    }
    else {
        resultEl.textContent="Wrong!";
        timerCount -= 10;
    }
    questionNumber++;
    if(questionNumber < questions.length){
        var choicesId = document.getElementById("choices");
        while (choicesId.firstChild){
            choicesId.removeChild(choicesId.lastChild);
        }
        displayQuestion();
    }
    else{
        isComplete = true;
        gameOver();
    }
}

function setupScoresScreen(){
    finishedEl.style.display = 'none';
    scoreEl.style.display = 'none';
    initialsEl.style.display = 'none';
    submitBtn.style.display = 'none';
    highScoresEl.style.display = "";
}

function showAsideHighScores() {
   if (getComputedStyle(asideHighScroesEl).display === "none") {
    console.log("called");
    asideHighScroesEl.style.display = "block";
   }
   else {
    asideHighScroesEl.style.display = "none";
   }
   
}

function showScores(){
    highScoreList.push({initials: initialsEl.value, score: numCorrectAnswers});
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
 
    setupScoresScreen();
    highScoreList.forEach(item => {
        var li = document.createElement('li');
        li.textContent = `initials: ${item.initials} - score: ${item.score}`;
        highScoresEl.appendChild(li);
    })

}

// game over function
function gameOver() {
 setupGameOverScreen();
}
// save data function

// reset scores function

//initialize game
function init() {
 startScreen();
 if(localStorage.getItem("highScoreList") != null){
    var i = 1;
    highScoreList = JSON.parse(localStorage.getItem("highScoreList"));
    highScoreList.forEach(item => {
        var li = document.createElement('li');
        li.textContent = `${i}. ${item.initials} - ${item.score}`;
        asideHighScroesEl.appendChild(li);
        i++;
    });
}
}

function setupGameScreen(){
    titleEl.style.display = 'none';
    descEl.style.display = 'none';
    startBtn.style.display = 'none';
    loadContent.style.display = 'none';
    questionEl.style.display = "";
    choicesEl.style.display = "";
    dividerEl.style.display = "";
    resultEl.style.display = "";
    timerEl.style.display = "";
    timerEl.textContent = "Time: " + timerCount;;
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

