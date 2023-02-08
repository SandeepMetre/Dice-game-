let  randomNumber1=Math.trunc(Math.random()*(6-1)+1);
console.log(Math.trunc(randomNumber1));
let  randomNumber2=Math.trunc(Math.random()*(6-1)+1);
console.log(Math.trunc(randomNumber2));

var randomImage1="images/"+"dice"+randomNumber1+".png";

var randomImage2="images/"+"dice"+randomNumber2+".png";

console.log(randomImage1);
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);


//display the winner

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="player1 winns ";
} else if(randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="Player2 Winns";
}else {
  document.querySelector("h1").innerHTML="DRAW";
}
