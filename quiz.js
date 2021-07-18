const Question = document.querySelector("#question");//used to link the html coding using '#question'
const Answer = document.querySelector("#answer");//input from the user
const Verdict = document.querySelector("#verdict");//determines whether or not the question is correct
const questionList = ["What is Rosalind Franklin famous for", "What is Grace Hopper's occupation", 
"How many books did Neil Tyson wrote", "Isaac Newton discovered gravity during the Black Plague (True/False)",
 "What is Janet Taylor's first book", "Who is Thomas Edison's rival", "What is Jex-Blake's STEM contribution",
  "Benjamin Franklin died at 48 (true/false)"];//list of questions//
const answerList = ["Discovery of DNA", "Computer scientist", "14", "true", 
"Luni-Solar and Horary Tables", "Nikola Tesla", "fought to study medicine", "false"];//list of answers//
const congratsList = ["Correct!", "Well Done!", "Amazing!"];//output of words if the answer is correct//
const wrongList = ["Incorrect", "Nope.", "No! You're wrong!"];//output of words if the answer is wrong//
var number = 0; 
let text =  questionList[number] + "?";//the text appeared will be the one of the questions from left to right 
//ending with a question mark
Question.innerHTML = text;//innerHTML is HTML coding inside one of the HTML components//

function quizFunction() { //Function of the quiz//
    if (Answer.value == answerList[number]) { //if/else statement//
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

function nextQuestion() { //this code enables the user to answer the following questions
       if(document.querySelector("#question")<2) {
        number += 1;
        text += questionList[number] + "?";
     Question.innerHTML = text;  
       }  else {
           //reference: https://www.w3schools.com/js/tryit.asp?filename=tryjs_button_disabled
       }
    
} 


function previousQuestion() {  //this code enables the user to go back to previous questions
    number -= 1;
    text -= questionList[number] + "?";
    Question.innerHTML = text;
    
}
