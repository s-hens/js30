//Create array
const pressed = [];

//Create secret code
const secretCode = "wesbos";
console.log(`The secret code is... ${secretCode}`);

window.addEventListener("keyup", (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
    if (pressed.join(``).includes(secretCode)) {
        console.log("Nice job, do it again!");
        cornify_add();
    }
})