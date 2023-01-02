window.addEventListener("keydown", playSound);

function playSound(e) {
    //Get audio file and div associated with keydown
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`div[data-key="${e.key}"]`);
    //If there is no audio file associated with the keydown, then stop the function
    if(!audio) return;
    //Stop any audio that is already playing
    audio.currentTime = 0;
    //Play audio file associated with keydown
    audio.play();
    //Activate transition on div associated with keydown
    key.classList.add("playing");
}

/*
//Wes's method: animation ends when transition is done

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition (e) {
    //Several peoperties transition, but we only listen for the "transform"
    if (e.propertyName !== "transform") return;
    //Remove transition when it is done
    this.classList.remove("playing");
}
*/

//Alternate method: animation only ends on keyup

window.addEventListener("keyup", stopAnimation);

function stopAnimation(e) {
    //Get div associated with keyup
    const key = document.querySelector(`div[data-key="${e.key}"]`);
    //If there is no div associated with the keyup, then stop the function
    if (!key) return;
    //If the div associated with the keyup has the class "playing", remove it
    if (key.classList.contains("playing")) key.classList.remove("playing");
}