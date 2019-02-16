
// questions array that holds objects - these need to pop into the appropriate html elements every 15 seconds after the start button is pressed

let questions = [ 
    {
       question: "Which character finds Dennis' book of memoirs in the episode 'Dennis Reynolds an erotic life'?",
       imgSrc: "assets/images/eroticLife.png",
       choiceA: "Frank",
       choiceB: "Dee",
       choiceC: "Charlie",
       choiceD: "Mac",
       correct: "A",
    },{
        question: "What is the gang's drink of choice in the episode 'The Gang give Frank and intervention'?",
        imgSrc: "assets/images/intervention.jpg",
        choiceA: "Beer in a can",
        choiceB: "Wine in box",
        choiceC: "Wine in a can",
        choiceD: "Beer in a box",
        correct: "C",
    },{
        question: "Which of these was not seen in Charlie's dream book?",
        imgSrc: "assets/images/dreamBook.jpg",
        choiceA: "Bird with teeth",
        choiceB: "Milk Steak",
        choiceC: "Denim Chicken",
        choiceD: "Hans Werm Hatt",
        correct: "B",
    },{
        question: "What movie does Dennis rent, for movie night, in the episode 'Mac and Dennis break-up'?",
        imgSrc: "assets/images/breakup.png",
        choiceA: "Predator",
        choiceB: "The Transporter",
        choiceC: "Rocky 4",
        choiceD: "The Transporter 2",
        correct: "D",
    },{
        question: "What is the name of the neighbor in the episode 'Mac and Dennis move to the suburbs'?",
        imgSrc: "assets/images/suburbs.jpg",
        choiceA: "Wally",
        choiceB: "Billy",
        choiceC: "Willy",
        choiceD: "Walter",
        correct: "A",
    }
];

// declaring variables that can't be changed and assigning them to ID
const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const questionImage = document.getElementById("questionImage");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timer = document.getElementById("timer");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");

// declaring variables for the render question function
const lastQuestionIndex = questions.length -1;
let runningQuestion = 0;

let runningQuestionIndex = 0;


// declaring variables for render Counter function
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;

// variables for check answer function
// let score = 0;

// 

//$(document).ready(function(){


startBtn.addEventListener("click",startQuiz);

// declaring a function to begin the quiz
function startQuiz() {
    startBtn.style.display = "none";
    renderQuestion();
    quiz.style.display = "flex";
    TIMER = setInterval(renderCounter, 1000);
    
}

// declaring a function to render the questions
function renderQuestion() {
    let q = questions[runningQuestion];
    console.log(q)
    question.innerHTML = "<p>" + q.question + "</p>";
    questionImage.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function renderProgress() {
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
        progress.innerHTML += "<div class='dot' id="+qIndex+"></div>";
    }
}
renderProgress();

function renderCounter() {
    if (count <= questionTime) {
        console.log(count,questionTime)
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++;


    } else {
        count = 0;
        checkAnswer();
    }
}

function answerIsCorrect(index) {
    console.log("ANSWER IS CORRECT")
    document.querySelectorAll(index).style.backgroundColor = "#0f0"
}


function answerIsWrong(index) {
    console.log("WRONG") // document.getElementsByClassName("dot").style.backgroundColor = "#f00"
   var ele= document.getElementById(index);
   ele.style.backgroundColor="green"
}


function checkAnswer(answer) {
    console.log(answer)
    console.log(questions[runningQuestion])
    if (answer == questions[runningQuestion].correct) {
        // score++;
        answerIsCorrect(2); 
    } else {
        answerIsWrong(2);
    }
    if (runningQuestion < lastQuestion){
        count = 0;
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
        
}


//});
