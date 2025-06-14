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

let swordInPedestalDescription = document.querySelector(".sword-in-pedestal-description");
let somethingDescription = document.querySelector(".something-description");
let leverDescription = document.querySelector(".lever-description");

let retrieveSword = document.querySelector(".retrieve-sword");
let examineSwordInPedestal = document.querySelector(".examine-sword-in-pedestal");

let talkSomething = document.querySelector(".talk-something");
let examineSomething = document.querySelector(".examine-something");

let pullLever = document.querySelector(".pull-lever");
let examineLever = document.querySelector(".examine-lever");

console.log(leftTrapezoid.style.display);

//introScreen quick hide/show
    titleScreen.style.display = "none";
    /* titleScreen.style.display = "flex"; */
//mainScreen quick hide/show
    for (let d = 0; d < mainScreen.length; d++) {
        mainScreen[d].style.display = "none";
    }
    /* for (let g = 0; g < mainScreen.length; g++) {
        mainScreen[g].style.display = "block";
    } */
//objectScreen quick hide/show
    for (let e = 0; e < objectScreen.length; e++) {
        objectScreen[e].style.display = "none";
    }
    /* swordInPedestalScreen.style.display = "flex";
    somethingScreen.style.display = "flex"; */
    leverScreen.style.display = "flex";

//introScreen
/* for (let a = 0; a < mainScreen.length; a++) {
    mainScreen[a].style.display = "none";
}
for (let z = 0; z < objectScreen.length; z++) {
    objectScreen[z].style.display = "none";
}
startButton.addEventListener("click", function() {
    titleScreen.style.display = "none";
    for (let b = 0; b < mainScreen.length; b++) {
        mainScreen[b].style.display = "block";
    }
    console.log("wsp Man");
}); */

//mainScreen
/* swordInPedestalText.addEventListener("click", function() {
    for (let y = 0; y < mainScreen.length; y++) {
        mainScreen[y].style.display = "none";
    }
    swordInPedestalScreen.style.display = "flex";
});

somethingText.addEventListener("click", function() {
    for (let x = 0; x < mainScreen.length; x++) {
        mainScreen[x].style.display = "none";
    }
    somethingScreen.style.display = "flex";
});

leverText.addEventListener("click", function() {
    for (let w = 0; w < mainScreen.length; w++) {
        mainScreen[w].style.display = "none";
    }
    leverScreen.style.display = "flex";
}); */


//objectScreen
retrieveSword.addEventListener("click", function() {
    swordInPedestalDescription.innerHTML = "You approach the pedestal and climb the smooth steps. First wrapping your hands around the hilt, you pull. The thing just won't budge. You pull as hard as you can. Still nothing. Clearly this way is futil, so you grab it by the crossguard. When you pull, it doesn't come out. You pull again, this time with your full strength. Just as the effort becomes unbearable, the sword rips free of the pedestal, rocketing toward the ceiling. It ricochets to the floor after creating a sound like glass breaking upon hitting the ceiling, and hits the floor the first time with a thud quickly followed by a loud reverberating clang, which is quickly muted as the sword bounces back to the floor with a clank.";
});
examineSwordInPedestal.addEventListener("click", function() {
    swordInPedestalDescription.innerHTML = "The stone of the pedestal is smooth, not like the smoothness of a rock worn down by a stream but more akin to the smoothness of a brittle rock that has been cracked in half. Both sides of the pedestal are shaped in, as far as you can tell, perfect circles which are concentric. In the very center of both steps lies the sword. You look down into where it has been embedded but there seems to be no space at all between the steel of the sword blade and the stone of the pedestal. As for the sword itself, the blade is made of a bright grey steel tinged with blue and is double-sided. Engraved into the blade - on the right side from your perspective - are indecipherable runes glowing the bluish white of a hot fire. The crossguard is made of a dull gold that somewhat resembles brass, and from both the brighter rounded ends of the crossguard emanates purple particles, seemingly coming from nothing and getting thinner and fewer as they rise through the air, completely dissipating about a foot above where they are being continuously regenerated. The particles provide a dim purple light to the area complementing the light provided by the glowing runes. The hilt is made of the same steel as the blade and the grip is made of wood. The pommel of the sword is a large, perfectly spherical pearl with a typical luster, a shining off-white. The entire thing, sword and pedestal, takes up the diameter of approximately a meter and is as tall as your shoulders when you aren't standing on the steps. The sword makes no sound on its own; however, the crossguard faintly rings when tapped on the round edges. The steps, mysteriously, make absolutely no noise no matter what you do to them. The whole thing smells faintly of pine. You can probably guess what all of this would taste like.";
});

talkSomething.addEventListener("click", function() {
    somethingDescription.innerHTML = "\"Translate\"";
});
examineSomething.addEventListener("click", function() {
    somethingDescription.innerHTML = "Sight: On closer inspection, there is a faint glowing sphere surrounding... Something. The chair is made out of mahogany. Sound: On closer inspection, you hear a faint breathing emanating from... Something. Touch: As your index finger approaches to touch what appears to be a lung, you feel a sharp pain and your fingertip appears to be burnt. However, the burn quickly fades. You touch the chair this time, stroking your finger across the smooth polish of the chair leg. Taste: You don't feel like tasting any of this.";
});

pullLever.addEventListener("click", function() {
    leverDescription.innerHTML = "You died.";
});
examineLever.addEventListener("click", function() {
    leverDescription.innerHTML = "There is a key inside the inset.";
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