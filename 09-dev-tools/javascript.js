function makeGreen() {
    const p = document.querySelector('p');
    p.classList.toggle("green");
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello, I am a %s string!", "stringly stringy");

// Styled
console.log("%cI'm big!", "font-size: 24px;");
console.log("I'm so %cBIG!", "font-size: 50px;");
console.log("%cI'm highlighted!", "background: #FFFF00;");

// Warning!
console.warn("You're on thin ice buddy...");

// Error :|
console.error("You've done it this time!");

// Info
console.info("In the United States, the term 'pig' refers to a younger domesticated swine weighing less than 120 lbs, and the term 'hog' refers to older swine weighing more than 120 lbs. In Great Britain all domesticated swine are referred to as pigs.");

// Testing
// Used to check if something is true. Will only print in the console if the assertion is false.
console.assert(1 === 1, "Wrong!");
console.assert(1 === 2, "So wrong!");

const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That's incorrect!");

// Clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

dogs.forEach(dog => {
    console.group(`${dog.name}`);
        console.log(`This is ${dog.name}.`);
        console.log(`${dog.name} is ${dog.age} years old.`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old.`)
    console.groupEnd(`${dog.name}`);
})

// Counting
console.count("Hello");
console.count("Hello");
console.count("Hello");
console.count("Goodbye");
console.count("Hello");
console.count("Goodbye");
console.count("Hello");
console.count("Goodbye");

// Timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("fetching data");
        //console.log(data);
});

// Table
console.table(dogs);