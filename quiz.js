function myFunction() { //If the code is written between these brackets {} of my function, the code will run.//
    let verdict = document.querySelector ("#response");//Response is the answer from the user and the verdict//
    let Response = document.querySelector("#myPara");//will determine whether or not the answer is correct.//
    //let is a type of variable code.  Response is the id of the input received by the user.//
    if (Response.Text == "Discovery of DNA") { //This is an if/else statement.  If the first condition//
        document.body.style.backgroundColor = "Green";//is true, then the background will turn green.//
        verdict.innerHTML = "You're Correct!!!";//This will let the user know the answer is correct.  The//
    }                                           //second condition is which is "else if"//
                                                //background turn red if the answer is wrong.//
     else {
        document.body.style.backgroundColor = "Red";
        verdict.innerHTML = "Wrong answer!!!";  
    }
    
    
       
}