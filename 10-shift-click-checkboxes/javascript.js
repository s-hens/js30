const checkbox = document.querySelectorAll("input");

const checkboxArray = Array.from(checkbox);

console.log(checkboxArray);

checkbox.forEach(checkbox => checkbox.addEventListener("click", shiftClick));

function shiftClick(e) {
    if (!e.shiftKey) return;
    if (e.shiftKey === true) console.log("You shift clicked");
}