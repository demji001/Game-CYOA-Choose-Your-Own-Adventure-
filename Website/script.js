let titleScreen = document.querySelector(".title-screen");

let leftTrapezoid = document.querySelector(".left-trapezoid");
let bottomTrapezoid = document.querySelector(".bottom-trapezoid");
let rightTrapezoid = document.querySelector(".right-trapezoid");

let startButton = document.querySelector(".start-button");

let swordInPedestalText = document.querySelector(".sword-in-pedestal-text");
let somethingText = document.querySelector(".something-text");
let leverText = document.querySelector(".lever-text");

let mainScreen = document.getElementsByClassName("main-screen");
let objectScreen = document.getElementsByClassName("object-screen");
let returns = document.getElementsByClassName("return");

let swordInPedestalScreen = document.querySelector(".sword-in-pedestal-screen");
let somethingScreen = document.querySelector(".something-screen");
let leverScreen = document.querySelector(".lever-screen");

let choice = document.querySelector(".choice");

let retrieveSword = document.querySelector(".retrieve-sword");
let examineSwordInPedestal = document.querySelector(".examine-sword-in-pedestal");

let talkSomething = document.querySelector(".talk-something");
let examineSomething = document.querySelector(".examine-something");

let pullLever = document.querySelector(".pull-lever");
let examineLever = document.querySelector(".examine-lever");

console.log(leftTrapezoid.style.display);
/*leftTrapezoid.style.display = "none";
bottomTrapezoid.style.display = "none";
rightTrapezoid.style.display = "none";

startButton.addEventListener("click", function() {
    titleScreen.style.display = "none";
    //leftTrapezoid.style.display = "block";
    bottomTrapezoid.style.display = "block";
    rightTrapezoid.style.display = "block";s
});*/
titleScreen.style.display = "none";
for (let z = 0; z < objectScreen.length; z++) {
    objectScreen[z].style.display = "none";
}
/*for (let k = 0; k < choice.length; k++) {
    choice[k].style.display = "none";
}*/

swordInPedestalText.addEventListener("click", function() {
    for (let y = 0; y < mainScreen.length; y++) {
        mainScreen[y].style.display = "none";
    }
    swordInPedestalScreen.style.display = "block";
});

somethingText.addEventListener("click", function() {
    for (let x = 0; x < mainScreen.length; x++) {
        mainScreen[x].style.display = "none";
    }
    somethingScreen.style.display = "block";
});

leverText.addEventListener("click", function() {
    for (let w = 0; w < mainScreen.length; w++) {
        mainScreen[w].style.display = "none";
    }
    leverScreen.style.display = "block";
});



retrieveSword.addEventListener("click", function() {

});
examineSwordInPedestal.addEventListener("click", function() {

});

talkSomething.addEventListener("click", function() {

});
examineSomething.addEventListener("click", function() {

});

pullLever.addEventListener("click", function() {

});
examineLever.addEventListener("click", function() {

});

for (let m = 0; m < returns.length; m++) {
    returns[m].addEventListener("click", function() {
        for (let v = 0; v < objectScreen.length; v++) {
            objectScreen[v].style.display = "none";
        }
        for (let u = 0; u < mainScreen.length; u++) {
            mainScreen[u].style.display = "block";
        }
    });
}