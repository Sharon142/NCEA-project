function myFunction() {
    let verdict = document.querySelector ("#response");
    let Response = document.querySelector("#myPara");
    
    if (Response.string == "Discovery of DNA") {
        document.body.style.backgroundColor = "Green";
        verdict.innerHTML = "You're Correct!!!";
    } else if (Response.string == "Discovery of tobbaco mosaic virus"){
        document.body.style.backgroundColor = "Green";
        verdict.innerHTML = "You're Correct!!!";  
    } else {
        document.body.style.backgroundColor = "Red";
        verdict.innerHTML = "Wrong answer!!!";  
    }
       
}