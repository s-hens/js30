const hero = document.querySelector(".hero");

const text = hero.querySelector("h1");

const walk = 300;

hero.addEventListener("mousemove", shadow);

function shadow(e) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;
        //Another way to type this
        //const { offsetWidth: width, offsetHeight: height } = hero;
        //let { offsetX: x, offsetY: y } = e;

    //If "this" is the hero but "e.target" is the h1 text (the event was triggered on the hero but the mouse is moving over the h1 within the hero),
    //x and y will be the mouse offset from the h1, not from the hero.
    //We only want the offset from the hero itself.
    //So, if e.target is the h1, we normalise the offset values.
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    //"Walk" is 100px, size of shadow ranges from -50px to 50px
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(0, 255, 255, 0.9),
        ${xWalk * -1}px ${yWalk}px 0 rgba(255, 0, 255, 0.9),
        ${yWalk}px ${xWalk * -1}px 0 rgba(255, 255, 0, 0.9),
        ${yWalk * -1}px ${xWalk}px 0 rgba(128, 255, 0, 0.9)
    `;
}