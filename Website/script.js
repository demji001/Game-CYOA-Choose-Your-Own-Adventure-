let titleScreen = document.querySelector(".title-screen");

let leftTrapezoid = document.querySelector(".left-trapezoid");
let bottomTrapezoid = document.querySelector(".bottom-trapezoid");
let rightTrapezoid = document.querySelector(".right-trapezoid");

let startButton = document.querySelector(".start-button");

let swordInPedestalText = document.querySelector(".sword-in-pedestal-text");
let somethingText = document.querySelector(".something-text");
let leverText = document.querySelector(".lever-text");

let mainScreen = document.getElementsByClassName("main-screen");
//not sure exactly how to utilize this data type of mainScreen
console.log(leftTrapezoid.style.display);
/*leftTrapezoid.style.display = "none";
bottomTrapezoid.style.display = "none";
rightTrapezoid.style.display = "none";

startButton.addEventListener("click", function() {
    titleScreen.style.display = "none";
    //leftTrapezoid.style.display = "block";
    bottomTrapezoid.style.display = "block";
    rightTrapezoid.style.display = "block";
});*/
titleScreen.style.display = "none";

swordInPedestalText.addEventListener("click", function() {
    for (let i = 0; i < mainScreen.length; i++) {
        mainScreen[i].style.display = "none";
    }
});

somethingText.addEventListener("click", function() {
    for (let i = 0; i < mainScreen.length; i++) {
        mainScreen[i].style.display = "none";
    }
});

leverText.addEventListener("click", function() {
    for (let i = 0; i < mainScreen.length; i++) {
        mainScreen[i].style.display = "none";
    }
});