//Elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullScreen = player.querySelector(".fullscreen");

//Functions

function togglePlay() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
}

function checkIfSpace(e) {
    if (e.code == "Space") togglePlay();
}

function updatePlayButton() {
    if (video.paused) toggle.textContent = ("►");
    else toggle.textContent = ("⏸");
}

/*Wes' Solution

function updateButton() {
    const icon = this.paused ? "►" : "⏸";
    toggle.textContent = icon;
}
*/

function skip() {
    //These buttons were given the attribute data-skip="seconds to skip" in the HTML, so we can call it here
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    //Sliders have been given the names "volume" and "playbackRate" in the HTML, which match the properties we want to update on the video. Convenient!
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function toggleFullScreen() {
    video.requestFullscreen();
}

//Event Listeners

//Play video on click, on play button, or on spacebar
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
window.addEventListener("keydown", checkIfSpace);

//Toggle ►/⏸
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);

//Skip
skipButtons.forEach(button => button.addEventListener("click", skip));

//Range sliders: Volume and Playback Rate
ranges.forEach(button => button.addEventListener("change", handleRangeUpdate));

//Update progress bar as video plays
video.addEventListener("timeupdate", handleProgress);

//Change timestamp of video by clicking progress bar
progress.addEventListener("click", scrub);

//Change timestamp of video by dragging progress bar
//When user moves their mouse over the progress bar, first check if isDragging = true. If isDragging = true, then run scrub(e). If isDragging = false, do nothing.
let isDragging = false;

progress.addEventListener("mousedown", () => isDragging = true);
progress.addEventListener("mouseup", () => isDragging = false);
progress.addEventListener("mouseout", () => isDragging = false);

progress.addEventListener("mousemove", (e) => isDragging && scrub(e));

//Fullscreen
fullScreen.addEventListener("click", toggleFullScreen);