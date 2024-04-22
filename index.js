document.getElementById("playButton").addEventListener("click", playSoldier);

function playSoldier() {

    let randomNumber1 = Math.floor(Math.random() * 3) + 1; //random number between 1-3

let randomSoldierImage1 = "soldier" + randomNumber1 + ".png"; //generate string soldier1.png - soldier3.png

let randomImageSource1 = "images/" + randomSoldierImage1;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


let randomNumber2 = Math.floor(Math.random() * 3) + 1; //random number between 1-3

let randomSoldierImage2 = "soldier" + randomNumber2 + ".png"; //generate string soldier1.png - soldier3.png

let randomImageSource2 = "images/" + randomSoldierImage2;

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}


// Play the sound
let playSound = document.getElementById("playSound");
playSound.play();

}
