//declare variables here
var correctAnswers = 0;
var incorrectAnswers = 0;
var clockRunning = false;
var time = 10;
var intervalId;

hide();

var questions = [{ 
    question: "What will my question be?",
    answer: {
      1:  "answer1", 
      2:  "answer2",
      3:  "answer3",
      4:  "answer4"
    },
    correctAnswer: 3
},
{
    question: "Question number 2 answer is 1",
    answer: {
      1:  "answer1", 
      2:  "answer2",
      3:  "answer3",
      4:  "answer4"
    },
    correctAnswer: 1
},
{
    question: "Question number 3 answer is 3",
    answer: {
      1:  "answer1", 
      2:  "answer2",
      3:  "answer3",
      4:  "answer4"
    },
    correctAnswer: 3
}]


window.onload = function() {
$("#start").on("click", start);
}

//basic stopwatch functions
function start() {
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
      show();
    }
    
  }

function count() {
    time--;
    var converted = timeConverter(time);
    $("#timer").text(converted);
    if (time === 0){
        stop();
        isAnswered1();
        isAnswered2();
        isAnswered3();
        hide();
        showAnswers();
    }
    
  }

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
}
  
function stop() {
    clearInterval(intervalId);
    clockRunning = false;
  }
//end stopwatch functions

//start quiz stuff
// question 1
$("#my-question1").text(questions[0].question);
//for loop for answers
for (var i = 1; i < 5; i++){
$("#my-answer"+i).text(questions[0].answer[i]);
console.log(questions[0].answer[i]);
}
// $("my-answer1").html(questions[0].answer);

// question 2
$("#my-question2").text(questions[1].question);
// $("my-answer2").text(questions[1].answer);

// question 3
$("#my-question3").text(questions[2].question);
// $("my-answer3").text(questions[2].answer);

//end quiz stuff

//quiz stuff functions
function isAnswered1(){
    var answer1_1Answered = document.getElementById("my-answer1-1").checked;
    var answer1_2Answered = document.getElementById("my-answer1-2").checked;
    var answer1_3Answered = document.getElementById("my-answer1-3").checked;
    var answer1_4Answered = document.getElementById("my-answer1-4").checked;

    if (answer1_3Answered === true ){
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }
}

function isAnswered2(){
    var answer2_1Answered = document.getElementById("my-answer2-1").checked;
    var answer2_2Answered = document.getElementById("my-answer2-2").checked;
    var answer2_3Answered = document.getElementById("my-answer2-3").checked;
    var answer2_4Answered = document.getElementById("my-answer2-4").checked;

    if (answer2_1Answered === true ){
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }
}

function isAnswered3(){
    var answer3_1Answered = document.getElementById("my-answer3-1").checked;
    var answer3_2Answered = document.getElementById("my-answer3-2").checked;
    var answer3_3Answered = document.getElementById("my-answer3-3").checked;
    var answer3_4Answered = document.getElementById("my-answer3-4").checked;

    if (answer3_3Answered === true ){
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }
}

function hide(){
document.getElementById("question1").style.display = "none";
document.getElementById("question2").style.display = "none";
document.getElementById("question3").style.display = "none";
document.getElementById("time-remaining").style.display = "none";
document.getElementById("done").style.display = "none";
}

function show(){
document.getElementById("start").style.display = "none";
document.getElementById("question1").style.display = "block";
document.getElementById("question2").style.display = "block";
document.getElementById("question3").style.display = "block";
document.getElementById("time-remaining").style.display = "block";
}

function showAnswers(){
document.getElementById("done").style.display = "block";
$("#correct-answers").text("Correct Answers: " + correctAnswers);
$("#incorrect-answers").text("Incorrect Answers: " + incorrectAnswers);

}


