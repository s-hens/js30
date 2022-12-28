const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();

    //Seconds
    let seconds = now.getSeconds();
    //Convert seconds to a degree value, account for initial 90deg offset in CSS
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    //Rotate second hand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //Minutes
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    //Hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) +90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    //Fix transition at last second of each minute
    if (seconds = 59) secondHand.style.transform = `transition: 0s`;
    if (seconds = 1) secondHand.style.transform = `transition: 0.5s`;
}

//Run setDate every second
setInterval(setDate, 1000);