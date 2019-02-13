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
const score = document.getElementById("score");

function startQuiz() {
    startBtn.style.display = "none";
    quiz.style.display = "flex";
}
