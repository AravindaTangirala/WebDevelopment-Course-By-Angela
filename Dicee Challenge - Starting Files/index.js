//getting a random nu,mber between 1-6
randomNumber1 = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber1);
//with the randomNumber1 we are deciding which dice to be displayed randomly
randomImage1 = "dice" + randomNumber1 + ".png";
//console.log(randomImage1);
//since the diceimages are in images
randomImageSource1 = "images/" + randomImage1;
//changing the source
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
//for second dice
randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomImage2 = "dice" + randomNumber2 + ".png";
randomImageSource2 = "images/" + randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Its a Draw";
}
