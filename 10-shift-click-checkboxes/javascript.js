const checkbox = document.querySelectorAll("input");

const checkboxArray = Array.from(checkbox);
console.log(checkboxArray);

checkboxArray.forEach(checkbox => checkbox.addEventListener("click", shiftClick));

function shiftClick(e) {
    if (!e.shiftKey) return;
    if (e.shiftKey === true) {

        console.log(`You shift clicked`);

        const checked = (checkbox) => checkbox.checked;
        const selectionStart = checkboxArray.findIndex(checked);
        const selectionEnd = checkboxArray.findLastIndex(checked);

        console.log(selectionStart);
        console.log(selectionEnd);
    }
}