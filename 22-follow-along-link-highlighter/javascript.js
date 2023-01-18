//Get all the links on the page and give them event listeners
const triggers = document.querySelectorAll("a");
triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));

//Create a span called "highlight"
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

//Get the size and location of the hovered link, then apply them to the span "highlight"
//Make sure to account for how much the user has scrolled
function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    highlight.style.display = "block";
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    highlight.style.transform = `translate(${linkCoords.left + window.scrollX}px, ${linkCoords.top + window.scrollY}px)`;
}

//Make the effect not happen on my GitHub link
const linkDiv = document.querySelector(".link");
const ghLink = linkDiv.querySelector("a");
ghLink.removeEventListener("mouseenter", highlightLink);