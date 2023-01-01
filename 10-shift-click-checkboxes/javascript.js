const checkbox = document.querySelectorAll("input");

const checkboxArray = Array.from(checkbox);

checkboxArray.forEach(checkbox => checkbox.addEventListener("click", shiftClick));

function shiftClick(e) {
    if (!e.shiftKey) return;
    if (e.shiftKey === true) {
        const checked = (checkbox) => checkbox.checked;
        const selectionStart = checkboxArray.findIndex(checked);
        const selectionEnd = checkboxArray.findLastIndex(checked);
        const selection = checkboxArray.slice(selectionStart, selectionEnd);
        selection.forEach(checkbox => checkbox.checked = true);
    }
}