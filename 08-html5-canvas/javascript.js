//Create HTML5 canvas
const canvas = document.querySelector("#draw");

//Size of canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Canvas can be 2d or 3d
const ctx = canvas.getContext("2d");

//Stroke appearance
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 25;

//Can include blend modes like in photoshop
//ctx.globalCompositeOperation = "overlay"

//Create variables
let lastX = 0;
let lastY = 0;
let hue = 0;
let isDrawing = false;
let direction = true;

//Is the user clicking on the canvas? If so, where?
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; //A neat way to give values to 2 variables using 1 line
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

//Drawing
canvas.addEventListener("mousemove", draw);

function draw(e) {
    //Stop function from running if user is not clicking on the canvas
    if(!isDrawing) return;

    //Cycle through colours of the rainbow
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue++;

    //Cycle through different line widths
    if (direction === true) ctx.lineWidth++;
    if (direction === false) ctx.lineWidth--;
    if (ctx.lineWidth >= 100 || ctx.lineWidth <=2) direction = !direction

    //Begin drawing
    ctx.beginPath();
        //Start from
        ctx.moveTo(lastX, lastY);
        //Go to
        ctx.lineTo(e.offsetX, e.offsetY);

        [lastX, lastY] = [e.offsetX, e.offsetY];
        ctx.stroke();
}