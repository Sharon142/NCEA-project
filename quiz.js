function myFunction() {
    let Response = document.querySelector ("#response");
    let Question1 = document.querySelector("#myPara");
    
    if (Response.string == "Discovery of DNA") {
        document.body.style.backgroundColor = "Green";
        Question1.innerHTML = "You're Correct!!!";
    } else if (Response.string == "Discovery of tobbaco mosaic virus"){
        document.body.style.backgroundColor = "Green";
        Question1.innerHTML = "You're Correct!!!";  
    } else {
        document.body.style.backgroundColor = "Red";
        Question1.innerHTML = "Wrong answer!!!";  
    }
       
}