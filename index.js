var rand1 = Math.floor(Math.random()*6)+1;
var rand2 = Math.floor(Math.random()*6)+1;

var rImage = "images/dice" + rand1 + ".png";
var rImage2 = "images/dice" + rand2 + ".png";

var imageArray1 = document.querySelectorAll("img")[0].setAttribute("src",rImage);

var imageArray2 = document.querySelectorAll("img")[1].setAttribute("src",rImage2);

if (rand1>rand2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (rand1<rand2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else {
  document.querySelector("h1").innerHTML = "TIE!"
}
