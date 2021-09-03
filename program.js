function startFunction(){
const number = ["1,2,3,4,5,6,7,8,9,10"];
const letters = ["A,B,C,D,E,F,G,H,I,J"];
const combine = number.concat(letters);
document.getElementById("demo").innerHTML = combine.toString();
for (let i = 0; i < combine.length; i++) {
    text += combine[i] + "<br>";
  }
}

function stopFunction(){

}

