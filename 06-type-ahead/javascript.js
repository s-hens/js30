const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

//Create empty array to put cities into
const cities = [];

//Fetch() returns a "promise" which we have called blob
//But fetch() does not know what kind of data we are working with
//In this case we know it is .json, so we must use blob.json() to convert blob from raw data into .json
//This returns another "promise" which we have called data. Now that the computer knows data is .json, we can access it as expected
//Then push data into constant array cities using (...spread) method
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //Use Regular Expression to create search pattern
        //RegEx must be constructed before it can be used
        //Modifier "gi": g for global match (find all matches rather than stopping at first match), i for insensitive (case-insensitive matching)
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
}

//Function to put commas in the population numbers
//Taken from StackOverflow
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `,`);
}

function displayMatches() {
    //Run findMatches using user input and the cities array
    const matchArray = findMatches(this.value, cities);
    //Show result in HTML
    const html = matchArray.map(place => {
        //Make the matched part highlight, but do not inherit case from user input
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(regex, (match) => `<span class="hl">${match}</span>`);
        const stateName = place.state.replace(regex, (match) => `<span class="hl">${match}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">Population: ${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join(``); //.join() turns an array into a string, which causes results to display without commas in between
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");

searchInput.addEventListener("input", displayMatches);

const suggestions = document.querySelector(".suggestions");

