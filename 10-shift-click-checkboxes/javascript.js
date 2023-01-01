/* My solution

const checkbox = document.querySelectorAll("input");

const checkboxArray = Array.from(checkbox);

checkboxArray.forEach(checkbox => checkbox.addEventListener("click", shiftClick));

function shiftClick(e) {
    if (!e.shiftKey) return;
    if (e.shiftKey) {
        const checked = (checkbox) => checkbox.checked;
        const selectionStart = checkboxArray.findIndex(checked);
        const selectionEnd = checkboxArray.findLastIndex(checked);
        const selection = checkboxArray.slice(selectionStart, selectionEnd);
        selection.forEach(checkbox => checkbox.checked = true);
    }
}
*/

//Wes' Solution

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
        }
        if (inBetween) {
            checkbox.checked = true;
        }
});}
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));