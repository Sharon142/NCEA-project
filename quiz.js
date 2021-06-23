function myFunction() { //If the code is written between these brackets {} of my function, the code will run.//
    let verdict = document.querySelector ("#response");//Response is the answer from the user and the verdict//
    let Response = document.querySelector("#myPara");//will determine whether or not the answer is correct.//
    //let is a type of variable code.  Response is the id of the input received by the user.//
    if (Response.String == "Discovery of DNA") { //This is an if/else statement.  If the first condition//
        document.body.style.backgroundColor = "Green";//is true, then the background will turn green.//
        verdict.innerHTML = "You're Correct!!!";//This will let the user know the answer is correct.  The//
    } else if (Response.String == "Discovery of tobbaco mosaic virus"){//second condition is which is "else if"//
        document.body.style.backgroundColor = "Green";//accepts another answer.  The "else" staement will make the//
        verdict.innerHTML = "Correct!!!";  //background turn red if the answer is wrong.//
    } else {
        document.body.style.backgroundColor = "Red";
        verdict.innerHTML = "Wrong answer!!!";  
    }
    let Response = document.querySelector ("#response");
    let Question2 = document.querySelector("#myPara");
    
    if (Response.value == "2") {
        document.body.style.backgroundColor = "Green";
        Question2.innerHTML = "You're Correct!!!";
    } else {
        document.body.style.backgroundColor = "Red";
        Question2.innerHTML = "Wrong answer!!!";  
    }
    let Response = document.querySelector ("#response");
    let Question3 = document.querySelector("#myPara");
               
}