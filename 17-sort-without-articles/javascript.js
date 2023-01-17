const bandList = document.querySelector("#bands");

const bands = ["The Strokes", "The Velvet Underground", "Fleetwood Mac", "Arctic Monkeys", "Tame Impala", "The Beatles", "Bauhaus", "The Shins", "Nirvana", "A Tribe Called Quest"];
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

bandsSorted.forEach(bandSorted => bandList.innerHTML = `${bandList.innerHTML}<li>${bandSorted}</li>`)