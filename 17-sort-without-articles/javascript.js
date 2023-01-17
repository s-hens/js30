const bands = ["The Strokes", "The Velvet Underground", "Fleetwood Mac", "Arctic Monkeys", "Tame Impala", "The Beatles", "Bauhaus", "The Shins", "Nirvana", "A Tribe Called Quest"];

/* My Solution

let bandsWithoutArticles = [];
let bandsSorted = [];

bands.forEach(band => sort(band));

function sort(band) {
    let withoutArticle;
    if (band.startsWith("A ")) {
        withoutArticle = band.slice(2);
    } else if (band.startsWith("The ")) {
        withoutArticle = band.slice(4);
    } else {
        withoutArticle = band;
    }
    bandsWithoutArticles.push(withoutArticle);
    bandsWithoutArticles.sort();
}

bandsWithoutArticles.forEach(bandWithoutArticle => replaceArticles(bandWithoutArticle));

function replaceArticles(bandWithoutArticle) {
    newName = bands.find(element => element.includes(bandWithoutArticle));
    bandsSorted.push(newName);
}

const bandList = document.querySelector("#bands");

bandsSorted.forEach(bandSorted => bandList.innerHTML = `${bandList.innerHTML}<li>${bandSorted}</li>`)
*/

// Wes' Solution ... much more concise

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}
  
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
  
document.querySelector('#bands').innerHTML =
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');