
// First Timer
// const startingMinutes = .10;
// let time = startingMinutes * 60;

// const countdownEl = document.getElementById("count");

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//     const minutes = Math.floor(time/60);
//     let seconds = time % 60;

//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     countdownEl.innerHTML = `Time: ${minutes}: ${seconds}`;
//     time--;
   
//     if (time < 0) {
//         clearInterval(updateCountdown);
//     }

// }

// if (time < 0) {
//     clearInterval(updateCountdown);
// }


//Second Timer
// const countdownEl = document.getElementById("count");

// var time = 3;
// setInterval(function(){
//   console.log(time);
//   time--
//   if (time <=0) {
//     clearInterval(time = 0);
//   }
// }, 1000);

// Third Timer

var time = 60

function timer() {
    var x = setInterval(function() {
    document.getElementById("count").innerHTML="Timer:"+" "+time+" seconds";
    time=time-1;

    if(time <+0) {
            clearInterval(x);    
        }


}, 1000);
}


// create our questions

const startButton = document.getElementById("start-btn")

startButton.addEventListener("click", startQuiz)



let score = 0;
let questionEl = document.getElementById("question");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let runningQuestion = 0;
let currentQuestionIndex;


let questions = [
    {
        question : "Who is the starting Center for 76ers?",
        choiceA : "Joel Embiid",
        choiceB : "Ben Simmons",
        choiceC : "Josh Richardson",
        choiceD : "Tobias Harris",
        correct : "A"
    },{
        question : "What year was Ben Simmons selected as the number 1 overall draft pick?",
        choiceA : "2014",
        choiceB : "2016",
        choiceC : "2018",
        choiceD : "2020",
        correct : "B"
    },{
        question : "Who did Tobias Harris play for before the 76ers?",
        choiceA : "Minnesota Timberwolves",
        choiceB : "Chicage Bulls",
        choiceC : "LA Clippers",
        choiceD : "Miami Heat",
        correct : "C"
    }
];

const lastQuestion = questions.length -1;

// function startQuiz() {
//     currentQuestionIndex = 0
//     setNextQuestion()

// }


// function setNextQuestion() {
//     showQuestion(currentQuestionIndex)
// }

// function showQuestion(question) {
//     questionEl.innerText=questions.runningQuestion.question

// }

// function selectAnswer() {

// }

function startQuiz() {
    currentQuestionIndex = 0;
    setNextQuestion();
    timer();
}

function setNextQuestion() {
    showQuestion(currentQuestionIndex)
}

function showQuestion () {
    document.getElementById("question").innerHTML=questions[currentQuestionIndex].question;
    document.getElementById("A").innerHTML=questions[currentQuestionIndex].choiceA;
    document.getElementById("B").innerHTML=questions[currentQuestionIndex].choiceB;
    document.getElementById("C").innerHTML=questions[currentQuestionIndex].choiceC;
    document.getElementById("D").innerHTML=questions[currentQuestionIndex].choiceD;
}

function checkAnswer(answer){
    if( answer == questions[currentQuestionIndex].correct){
        // answer is correct
        score++;
    }else{
        // answer is wrong
        time -= 10
    }
    count = 0;
    if(currentQuestionIndex < lastQuestion){
        currentQuestionIndex++;
        showQuestion();
    }else{
        // end the quiz and show the score
        showScore();
    }
}

function showScore() {
    console.log(score)
}


// for (i = 0; i < questions.length; i++) {
//     changeText ();
// }

// var score = 0
// var questions = [
//     {
//         prompt: "What sound does a rooster make?\n (a) quack, quack\n (b) cock a doodle do\n (c) moo\n (d) baaaaaa",
//         answer: "b"

//     },
//     {
//         prompt: "What sound does a duck make?\n (a) quack, quack\n (b) cock a doodle do\n (c) moo\n (d) baaaaaa",
//         answer: "a"

//     },
//     {
//         prompt: "What sound does a sheep make?\n (a) quack, quack\n (b) cock a doodle do\n (c) moo\n (d) baaaaaa",
//         answer: "d"

//     },
// ]


// for(var i = 0; i < questions.length; i++) {
//  var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer) {
//         alert("Correct");
//         score++ ;
//     } else {
//         alert("Incorrect");
//         }
// }

// alert("You got " + score + " out of " + questions.length + " correct");