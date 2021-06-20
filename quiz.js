function myFunction() {
    let Response = document.querySelector ("#response");
    let Answer = document.querySelector("#myPara");
    
    if (Response.string == "Discovery of DNA") {
        document.body.style.backgroundColor = "Green";
        Answer.innerHTML = "You're Correct!!!";
    } else if (Response.string == "Discovery of tobbaco mosaic virus"){
        document.body.style.backgroundColor = "Green";
        Answer.innerHTML = "You're Correct!!!";  
    } else {
        document.body.style.backgroundColor = "Red";
        Answer.innerHTML = "Wrong answer!!!";  
    }
       
}