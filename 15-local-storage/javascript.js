//The form where user enters tapas plates
const addItems = document.querySelector('.add-items');
addItems.addEventListener("submit", addItem);

//The UL of tapas plates
const itemsList = document.querySelector('.plates');
//Delegate eventListener from checkboxes to the UL they live in, since not all the potential checkboxes exist yet
itemsList.addEventListener("click", toggleDone);

//Array to store name and status of tapas plates
//Get from localStorage, otherwise use an empty array
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
    //Default behaviour of a form is to reload the page and send data to server. Prevent this from happening - we are only working client-side and have no need to refresh page or send data anywhere
    e.preventDefault();
    //Get query selector with name "item" from within this form only. Useful if your page has multiple forms
    const text = (this.querySelector("[name=item")).value;
    //Create item
    const item = {
        text, //Shorthand property avoids typing `text: text,`
        done: false,
    }
    //Put item into array "items", then send array to populateList()
    items.push(item);
    populateList(items, itemsList);
    //Send array into local storage. You can only use strings in local storage, so we need to convert our array into a JSON string
    localStorage.setItem("items", JSON.stringify(items));
    //Reset form
    this.reset();
}

function toggleDone(e) {
    //Target just the inputs within the UL
    if(!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    //Toggle by setting it to the opposite of itself
    items[index].done = !items[index].done;
    //Store "checked" (or not) status property in local storage
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
}

//Why not use global variables? Because function is more robust if it can be used with any array input
function populateList(plates = [], platesList) {
    //Add each item to the UL of tapas plates
    //Ternary string is used to determine if item has property "checked" or not
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="items${i}" ${plate.done ? "checked" : ""} />
            <label for="items${i}">${plate.text}</label>
        </li>
        `;
    }).join(``); // Make array into 1 string, regardless of # of items in it
}

populateList(items, itemsList);

//Bonus challenge: add "check all" and "uncheck all" buttons

const checkButton = document.querySelector('.checkall');
const uncheckButton = document.querySelector('.uncheckall');

checkButton.addEventListener("click", checkAll);
uncheckButton.addEventListener("click", uncheckAll);

function checkAll() {
    items.forEach(element => element.done = true);
    populateList(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
}

function uncheckAll() {
    items.forEach(element => element.done = false);
    populateList(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
}