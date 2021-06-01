function myFunction() {
    document.body.style.backgroundColor = "green";/*This is for the background colour of the webpage*/
    let input = document.querySelector("#response");
    input.innerHTML = "text" /*The end-user's feedback is meant to be in letters*/
    let output = document.querySelector("#myPara");
    output.innerHTML = "Thank you for your feedback!"; /*Output after the survey is completed*/
  }