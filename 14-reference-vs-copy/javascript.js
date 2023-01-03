// Start with strings, numbers and booleans
let age1 = 100;
let age2 = age1;
console.log(age1, age2); // 100 100
age1 = 200;
console.log(age1, age2); // 200 100.
// The value of age1 goes into age2 *when age2 is created*, which is *before* the value of age is changed.
// age1 does not continually refer back to age2.

let name1 = "Wes";
let name2 = name1;
console.log(name1, name2); // Wes Wes
name1 = "Wesley";
console.log(name1, name2); // Wesley Wes

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// And we want to make a copy of it.
const team = players;

console.log(players, team); // "Wes", "Sarah", "Ryan", "Poppy"
                            // "Wes", "Sarah", "Ryan", "Poppy"

// You might think we can just do something like this:
team[3] = "Bob";

// However what happens when we update that array?
console.log(players, team); // "Wes", "Sarah", "Ryan", "Bob"
                            // "Wes", "Sarah", "Ryan", "Bob"

// Now here is the problem!
    // When you edit an array that references another, it edits the original array too.
    // This is not the case with numbers, strings, and booleans.

// Why?
    // It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this?
    // We take a copy instead!

// One way
const team2 = players.slice();

// Or create a new array and concat the old one in
const team3 = [].concat(players);

// Or use the new ES6 Spread
const team4 = [...players];

// Or use Array.from
const team5 = Array.from(players);

// Now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object
const person = {
    name: 'Wes Bos',
    age: 80
};

console.log(person); //Object {name: "Wes Bos", age: 80}

// And think we make a copy:
const captain = person;
captain.number = 99;

console.log(captain); //Object {name: "Wes Bos", age: 80, number: 99}
console.log(person);  //Object {name: "Wes Bos", age: 80, number: 99}

// How do we take a copy instead?
const person2 = {
    name: 'Wes Bos',
    age: 80
};

const cap2 = Object.assign({}, person2, {number: 99, age: 12});
console.log(cap2);

console.log(cap2);    //Object {name: "Wes Bos", age: 12, number: 99}
console.log(person2); //Object {name: "Wes Bos", age: 80}

// Or use object ...spread
const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. Lodash has a cloneDeep method, but you should think twice before using it.

// Poor man's cloneDeep
const wes = {
    name: "Wes",
    age: 100,
    social: {
        twitter: "@wesbos",
        facebook: "wesbos.developer"
    }
}

const dev2 = JSON.parse(JSON.stringify(wes));
// Turn into string, then immediately turn back into an object
// Now it's a new object with no references
// Performance- questionable?