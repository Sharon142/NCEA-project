let userName = document.querySelector("#userName");
let name = document.querySelector("#name");
let greetings = document.querySelector("#greetings");
let quiz = document.querySelector("#quiz");
let answer = document.querySelector("#answer");
quiz.style.display ="none"
let question = 0;
function input(){
    name.innerHTML = ""
    name.innerHTML = "Hello " + userName.value + ", welcome to my quiz.";
    greetings.style.display ="none"
    quiz.style.display ="block"
    questionList.innerHTML = questionList[iterationNumber];
   }
let score=0
const Question = document.querySelector("#question");//used to link the html coding using '#question'
const Answer = document.querySelector("#answer");//input from the user
const Verdict = document.querySelector("#verdict");//determines whether or not the question is correct
const questionList = ["What is Rosalind Franklin famous for", "What is Grace Hopper's occupation", 
"How many books did Neil Tyson wrote", "Isaac Newton discovered gravity during the Black Plague (True/False)",
 "What is Janet Taylor's first book", "Who is Thomas Edison's rival", "What is Jex-Blake's STEM contribution",
  "Benjamin Franklin died at 48 (true/false)"];//list of questions//
  const answerList = ["Discovery of DNA", "Computer scientist", "14", "True", 
"Luni-Solar and Horary Tables", "Nikola Tesla", "Fought to study medicine", "False"];//list of answers//            
const congratsList = ["Correct!", "Well Done!", "Amazing!"];//output of words if the answer is correct//
const wrongList = ["Incorrect", "Nope.", "No! You're wrong!"];//output of words if the answer is wrong//
var number = 0; 
let text =  questionList[number] + "?";//the text appeared will be the one of the questions from left to right 
//ending with a question mark
Question.innerHTML = text;//innerHTML is HTML coding inside one of the HTML components//

function quizFunction() { //Function of the quiz//
    if (Answer.value = answerList) { //if/else statement//
        document.body.style.backgroundColor = "Green"; //if the answer is correct the background will turn//
        //and one of the words from the congrats list will appear//
        Verdict.innerHTML = congratsList[number];//verdict is a code used to show whether or not the answer
        //correct
       score +=1 
    } else { //if the answer is wrong the background will turn red and one of the words from the wrong list
        //will appear
        document.body.style.backgroundColor = "Red";
        Verdict.innerHTML = wrongList[number];
        score=score
    } 

       text = "";
}

if (Answer.value == "discovery of dna"){
    alert("change 'd' to 'D' and 'dna' to 'DNA'");//alert box for the first question
}

function nextQuestion() {
    number += 1;
    text += questionList[number] + "?";//questions will be asked in a consecutive order
    Question.innerHTML = text;
}



