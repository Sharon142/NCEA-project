function myFunction() {/*For the javascript function to run*/
    let input = document.querySelector("#response");/*Code used to accept responses from an end-user*/
    input.innerHTML = "text" /*The end-user's feedback is meant to be in letters*/
    let output = document.querySelector("#myPara");/*code used to display the output to the end-user*/
    
    if (letters+numbers<100) {/*Code to run for if else statement*/
      document.body.style.backgroundColor = "cyan";/*This is for the background colour of the webpage*/    
      output.innerHTML = "Thank you for your feedback"; /*Output after the survey is completed*/
    } else {
      document.body.style.backgroundColor = "red";/*This is for the background colour of the webpage*/    
      output.innerHTML = "Answers are more than 100 characters (excluding spaces) in total"; /*Output after the survey is completed*/
    }
  }