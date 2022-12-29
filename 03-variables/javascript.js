//Create a NodeList with all inputs in div class "controls"
const inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => input.addEventListener("input", handleUpdate));

function handleUpdate() {
    //Dataset takes every "data-x: y" from HTML elements and puts them in an object we can use. In this case, "data-sizing: px" was added to the spacing & blur inputs. Base color input has no "data-sizing", so we add || `` meaning "or nothing", so the suffix works with any input.
    const suffix = this.dataset.sizing || ``;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}