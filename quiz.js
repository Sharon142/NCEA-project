const Question = document.querySelector("#question");
const Answer = document.querySelector("#answer");
const Verdict = document.querySelector("#verdict");
const questionList = ["What is Rosalind Franklin famous for", "What is Grace Hopper's occupation", "How many books did Neil Tyson wrote", "Isaac Newton discovered gravity during the Black Plague (True/False)", "What is Janet Talor's first book"];
const answerList = ["Discovery of DNA", "Computer scientist", "14", "true", "Luni-Solar and Horary Tables", ];
const congratsList = ["Correct!", "Well Done!", "Amazing!"];
const wrongList = ["Incorrect", "Nope.", "No! You're wrong!"];
var number = 0; 
let text =  questionList[number] + "?";
Question.innerHTML = text;
function quizFunction() {
    if (Answer.value == answerList[number]) {
        document.body.style.backgroundColor = "Green";
        Verdict.innerHTML = congratsList[number];
    } else {
        document.body.style.backgroundColor = "Red";
        Verdict.innerHTML = wrongList[number];
    }
    text = "";
}
function nextQuestion() {
    number += 1;
    text += questionList[number] + "?";
    Question.innerHTML = text;
}

       
