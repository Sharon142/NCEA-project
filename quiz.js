const Question = document.querySelector("#question");//used to link the html coding using '#question'
const Answer = document.querySelector("#answer");//input from the user
const Verdict = document.querySelector("#verdict");//determines whether or not the question is correct
const questionList = ["What is Rosalind Franklin famous for", "What is Grace Hopper's occupation", 
"How many books did Neil Tyson wrote", "Isaac Newton discovered gravity during the Black Plague (True/False)",
 "What is Janet Taylor's first book", "Who is Thomas Edison's rival", "What is Jex-Blake's STEM contribution",
  "Benjamin Franklin died at 48 (true/false)"];//list of questions//
const answerList = ["Discovery of DNA", "Computer scientist", "14", "True", 
"Luni-Solar and Horary Tables", "Nikola Tesla", "Fought to study medicine", "False"];//list of answers//
const answers = ["discovery of dna", "computer scientist", "14", "true", 
"luni-solar and horary tables", "nikola tesla", "fought to study medicine", "false"]
const congratsList = ["Correct!", "Well Done!", "Amazing!"];//output of words if the answer is correct//
const wrongList = ["Incorrect", "Nope.", "No! You're wrong!"];//output of words if the answer is wrong//
var number = 0; 
let text =  questionList[number] + "?";//the text appeared will be the one of the questions from left to right 
//ending with a question mark
Question.innerHTML = text;//innerHTML is HTML coding inside one of the HTML components//

function quizFunction() { //Function of the quiz//
    if (Answer.value == answerList.concat(answers)[number]) { //if/else statement//
        document.body.style.backgroundColor = "Green"; //if the answer is correct the background will turn//
        //and one of the words from the congrats list will appear//
        Verdict.innerHTML = congratsList[number];//verdict is a code used to show whether or not the answer
        //correct
        
    } else { //if the answer is wrong the background will turn red and one of the words from the wrong list
        //will appear
        document.body.style.backgroundColor = "Red";
        Verdict.innerHTML = wrongList[number];
    } 
    text = "";
}

function nextQuestion() {
    number += 1;
    text += questionList[number] + "?";//questions will be asked in a consecutive order
    Question.innerHTML = text;
}
 

