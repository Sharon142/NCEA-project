function myFunction() {
    let verdict = document.querySelector ("#response");
    let Response = document.querySelector("#myPara");
    
    if (Response.String == "Discovery of DNA") {
        document.body.style.backgroundColor = "Green";
        verdict.innerHTML = "You're Correct!!!";
    } else if (Response.String == "Discovery of tobbaco mosaic virus"){
        document.body.style.backgroundColor = "Green";
        verdict.innerHTML = "Correct!!!";  
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
    
    if (Response.string == "Grace Hopper") {
        document.body.style.backgroundColor = "Green";
        Question3.innerHTML = "You're Correct!!!";
    } else {
        document.body.style.backgroundColor = "Red";
        Question3.innerHTML = "Wrong answer!!!";  
    }

       
}