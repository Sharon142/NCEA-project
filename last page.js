function myFunction() {/*For the javascript function to run*/
    document.body.style.backgroundColor = "red";/*This is for the background colour of the webpage*/
    let input = document.querySelector("#response");/*Code used to accept responses from an end-user*/
    input.innerHTML = "text" /*The end-user's feedback is meant to be in letters*/
    let output = document.querySelector("#myPara");/*code used to display the output to the end-user*/
    output.innerHTML = "Thank you for your feedback!"; /*Output after the survey is completed*/
  }